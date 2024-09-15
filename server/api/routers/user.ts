import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import * as schema from '@/server/api/validators/user'
import { utapi } from '@/server/uploadthing'

export const userRouter = createTRPCRouter({
  // [GET] /api/trpc/user.getAll
  getAll: protectedProcedure.input(schema.query).query(async ({ input, ctx }) => {
    const users = await ctx.db.user.findMany({
      ...(input.q && {
        where: { OR: [{ name: { contains: input.q } }, { email: { contains: input.q } }] },
      }),
      take: input.limit,
      skip: (input.page - 1) * input.limit,
    })

    return users
  }),

  // [POST] /api/trpc/user.updateProfile
  updateProfile: protectedProcedure.input(schema.updateProfile).mutation(async ({ input, ctx }) => {
    await ctx.db.user.update({
      where: { id: ctx.session.user.id },
      data: { name: input.name, ...(input.avatar && { avatar: input.avatar }) },
    })

    if (input.avatar && ctx.session.user.avatar && input.avatar !== ctx.session.user.avatar)
      await utapi.deleteFiles([ctx.session.user.avatar.split('/').pop()!])

    return true
  }),

  // [POST] /api/trpc/user.updateRole
  updateRole: protectedProcedure.input(schema.updateRole).mutation(async ({ input, ctx }) => {
    const user = await ctx.db.user.update({
      where: { id: input.userId },
      data: { role: input.role },
    })

    return { role: user.role }
  }),
})
