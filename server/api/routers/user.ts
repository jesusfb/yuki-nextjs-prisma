import { TRPCError } from '@trpc/server'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
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

    return {
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
})
