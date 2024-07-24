import { TRPCError } from '@trpc/server'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/api/trpc'
import { userSchema } from '@/server/api/schemas/user'

export const userRouter = createTRPCRouter({
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
      products: user.products,
      numProducts: user._count.products,
      followers: user._count.followers,
      following: user._count.following,
      createdAt: new Date(user.createdAt).toDateString(),
    }
  }),

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
})
