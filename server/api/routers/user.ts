import { TRPCError } from '@trpc/server'

import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import * as schema from '@/server/api/validators/user'
import { utapi } from '@/server/uploadthing'

export const userRouter = createTRPCRouter({
  // [POST] /api/trpc/user.updateProfile
  updateProfile: protectedProcedure.input(schema.updateProfile).mutation(async ({ input, ctx }) => {
    const user = await ctx.db.user.update({
      where: { id: ctx.session.user.id },
      data: { name: input.name, ...(input.avatar && { avatar: input.avatar }) },
    })
    if (!user)
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to update profile' })

    if (input.avatar && ctx.session.user.avatar && input.avatar !== ctx.session.user.avatar)
      await utapi.deleteFiles([ctx.session.user.avatar.split('/').pop()!])

    return true
  }),
})
