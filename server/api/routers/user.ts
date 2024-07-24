import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { userSchema } from '@/server/api/schemas/user'
import { TRPCError } from '@trpc/server'

export const userRouter = createTRPCRouter({
  getUser: publicProcedure.input(userSchema.id).query(async ({ ctx, input: { id } }) => {
    const user = await ctx.db.user.findUnique({ where: { id } })
    if (!user) throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' })

    return { ...user, password: undefined }
  }),
})
