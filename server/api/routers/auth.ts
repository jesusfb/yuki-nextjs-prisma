import { TRPCError } from '@trpc/server'
import { Scrypt } from 'lucia'

import { sendEmail } from '@/emails'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/api/trpc'
import * as schema from '@/server/api/validators/auth'
import { lucia } from '@/server/auth/lucia'

export const authRouter = createTRPCRouter({
  // [POST] /api/trpc/auth.signUp
  signUp: publicProcedure.input(schema.signUp).mutation(async ({ input, ctx }) => {
    const isEmailTaken = await ctx.db.user.findUnique({ where: { email: input.email } })
    if (isEmailTaken) throw new TRPCError({ code: 'CONFLICT', message: 'Email already taken' })

    const user = await ctx.db.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: await new Scrypt().hash(input.password),
      },
    })
    if (!user)
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to create user' })

    await sendEmail({
      type: 'welcome',
      email: user.email,
      data: { name: user.name },
    })

    return true
  }),

  // [POST] /api/trpc/auth.signIn
  signIn: publicProcedure.input(schema.signIn).mutation(async ({ input, ctx }) => {
    const user = await ctx.db.user.findUnique({ where: { email: input.email } })
    if (!user) throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' })
    if (!user.password)
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'User has no password' })

    const isPasswordCorrect = await new Scrypt().verify(user.password, input.password)
    if (!isPasswordCorrect)
      throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Incorrect password' })

    const session = await lucia.createSession(user.id, {})
    const sessionCookie = lucia.createSessionCookie(session.id)

    return sessionCookie
  }),

  // [POST] /api/trpc/auth.changePassword
  changePassword: protectedProcedure
    .input(schema.changePassword)
    .mutation(async ({ input, ctx }) => {
      if (ctx.session.user.password && input.currentPassword) {
        const isPasswordCorrect = await new Scrypt().verify(
          ctx.session.user.password,
          input.currentPassword,
        )
        if (!isPasswordCorrect)
          throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Incorrect password' })
      }

      const newPassword = await new Scrypt().hash(input.newPassword)
      await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { password: newPassword },
      })

      return true
    }),

  // [POST] /api/trpc/auth.signOut
  signOut: protectedProcedure.mutation(async ({ ctx }) => {
    await lucia.invalidateSession(ctx.session.id)
    const sessionCookie = lucia.createBlankSessionCookie()
    ctx.headers.set('Set-Cookie', sessionCookie.serialize())

    return true
  }),
})
