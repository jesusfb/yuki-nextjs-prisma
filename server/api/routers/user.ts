import { TRPCError } from '@trpc/server'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/api/trpc'
import { userSchema } from '@/server/api/schemas/user'
import { utapi } from '@/server/uploadthing'
import { sendEmail } from '@/lib/emails'

export const userRouter = createTRPCRouter({
  // [GET] /api/trpc/user.getUser
  getUser: publicProcedure.input(userSchema.id).query(async ({ ctx, input: { id } }) => {
    const user = await ctx.db.user.findUnique({
      where: { id },
      include: {
        _count: {
          select: { products: true, followers: true, following: true },
        },
        products: { include: { user: true } },
      },
    })
    if (!user) throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' })

    const isFollowed = ctx.user
      ? (await ctx.db.user.findFirst({
          where: { id: ctx.user.id, following: { some: { id } } },
        })) !== null
        ? true
        : false
      : false

    return {
      isFollowed,
      id: user.id,
      name: user.name,
      role: user.role,
      email: user.email,
      image: user.image,
      address: user.address,
      products: user.products,
      numProducts: user._count.products,
      followers: user._count.followers,
      following: user._count.following,
      createdAt: new Date(user.createdAt).toDateString(),
    }
  }),

  // [POST] /api/trpc/user.toggleFollow
  toggleFollow: protectedProcedure.input(userSchema.id).mutation(async ({ ctx, input: { id } }) => {
    const isFollowing = await ctx.db.user.findFirst({
      where: { id: ctx.user.id, following: { some: { id } } },
    })

    if (isFollowing) {
      await ctx.db.user.update({
        where: { id: ctx.user.id },
        data: { following: { disconnect: { id } } },
      })
    } else {
      await ctx.db.user.update({
        where: { id: ctx.user.id },
        data: { following: { connect: { id } } },
      })
    }

    return { isFollowed: !isFollowing }
  }),

  // [POST] /api/trpc/user.edit
  edit: protectedProcedure.input(userSchema.edit).mutation(async ({ ctx, input }) => {
    const user = await ctx.db.user.update({
      where: { id: ctx.user.id },
      data: {
        name: input.name ?? ctx.user.name,
        image: input.image ?? ctx.user.image,
        address: input.address ?? ctx.user.address,
      },
    })

    if (ctx.user.image && ctx.user.image !== user.image)
      await utapi.deleteFiles(ctx.user.image.split('/').pop() ?? '')

    if (!user) throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      address: user.address,
    }
  }),

  // [POST] /api/trpc/user.deleteAccount
  deleteAccount: protectedProcedure.mutation(async ({ ctx }) => {
    const user = await ctx.db.user.delete({ where: { id: ctx.user.id } })
    const sessions = await ctx.db.session.deleteMany({ where: { userId: ctx.user.id } })
    const products = await ctx.db.product.deleteMany({ where: { userId: ctx.user.id } })
    if (user.image) await utapi.deleteFiles(user.image.split('/').pop() ?? '')

    if (!user || !sessions || !products)
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to delete account' })

    await sendEmail({
      to: user.email,
      name: user.name,
      type: 'deleteAccount',
      subject: 'Your account has been deleted successfully',
    })

    return { success: true }
  }),
})
