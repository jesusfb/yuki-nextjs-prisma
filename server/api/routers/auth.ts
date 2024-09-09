import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { lucia } from '@/server/auth/lucia'

export const authRouter = createTRPCRouter({
  signOut: protectedProcedure.mutation(async ({ ctx }) => {
    await lucia.invalidateSession(ctx.session.id)
    const sessionCookie = lucia.createBlankSessionCookie()
    ctx.headers.set('Set-Cookie', sessionCookie.serialize())
  }),
})
