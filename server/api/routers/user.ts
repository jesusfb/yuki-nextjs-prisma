import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import * as schema from '@/server/api/validators/user'
import { utapi } from '@/server/uploadthing'

export const userRouter = createTRPCRouter({
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
})
