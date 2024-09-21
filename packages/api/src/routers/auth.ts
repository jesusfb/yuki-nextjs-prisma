import { TRPCError } from '@trpc/server'

import { lucia, Scrypt } from '@yuki/auth/lucia'
import { sendEmail } from '@yuki/email'

import { createTRPCRouter, publicProcedure } from '../trpc'
import { schema } from '../validators/auth'

export const authRouter = createTRPCRouter({
  signUp: publicProcedure.input(schema.signUp).mutation(async ({ input, ctx }) => {
    const isValid = await ctx.db.user.findUnique({ where: { email: input.email } })
    if (isValid) throw new TRPCError({ code: 'BAD_REQUEST', message: 'User already exists' })

    const password = await new Scrypt().hash(input.password)

    const user = await ctx.db.user.create({
      data: { name: input.name, email: input.email, password },
    })

    await sendEmail({
      type: 'Welcome',
      email: user.email,
      subject: 'Welcome to our platform!',
      preview: 'You have successfully created an account',
      data: { name: user.name },
    })

    return user
  }),
  signIn: publicProcedure.input(schema.signIn).mutation(async ({ input, ctx }) => {
    const user = await ctx.db.user.findUnique({ where: { email: input.email } })
    if (!user) throw new TRPCError({ code: 'UNAUTHORIZED', message: 'User not found' })

    if (!user.password)
      throw new TRPCError({ code: 'UNAUTHORIZED', message: 'User has no password' })

    const isValid = await new Scrypt().verify(user.password, input.password)
    if (!isValid) throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid password' })

    const session = await lucia.createSession(user.id, {})
    const sessionCookie = lucia.createSessionCookie(session.id)
    return { sessionCookie }
  }),
})
