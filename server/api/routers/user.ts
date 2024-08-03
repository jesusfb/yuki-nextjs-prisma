import { TRPCError } from '@trpc/server'

import { sendEmail } from '@/lib/emails'
import { userSchema } from '@/server/api/schemas/user'
import {
  adminProcedure,
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '@/server/api/trpc'
import { utapi } from '@/server/uploadthing'

export const userRouter = createTRPCRouter({
  // [GET] /api/trpc/user.getUsers
  getUsers: adminProcedure.input(userSchema.getUsers).query(async ({ ctx, input }) => {
    const users = await ctx.db.user.findMany({
      where: input.q
        ? {
            OR: [
              { name: { contains: input.q, mode: 'insensitive' } },
              { email: { contains: input.q, mode: 'insensitive' } },
            ],
          }
        : undefined,
      include: {
        _count: { select: { products: true, carts: true } },
      },
    })
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      address: user.address,
      numProducts: user._count.products,
      numCarts: user._count.carts,
      createdAt: new Date(user.createdAt).toDateString(),
    }))
  }),

  // [GET] /api/trpc/user.getUser
  getUser: publicProcedure.input(userSchema.id).query(async ({ ctx, input: { id } }) => {
    const user = await ctx.db.user.findUnique({
      where: { id },
      include: {
        _count: {
          select: { products: true, followers: true, following: true },
        },
        products: { include: { user: true }, orderBy: { createdAt: 'desc' } },
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
      products: user.products.map((product) => ({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
      })),
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

    if (ctx.user.image !== user.image)
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
    await utapi.deleteFiles(user.image.split('/').pop() ?? '')

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

  // [POST] /api/trpc/user.deleteUser
  deleteUser: adminProcedure.input(userSchema.id).mutation(async ({ ctx, input: { id } }) => {
    const user = await ctx.db.user.delete({ where: { id } })
    const sessions = await ctx.db.session.deleteMany({ where: { userId: id } })
    const products = await ctx.db.product.deleteMany({ where: { userId: id } })
    await utapi.deleteFiles(user.image.split('/').pop() ?? '')

    if (!user || !sessions || !products)
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to delete user' })

    await sendEmail({
      to: user.email,
      name: user.name,
      type: 'deleteAccount',
      subject: 'Your account has been deleted by an admin',
    })

    return { success: true }
  }),
})
