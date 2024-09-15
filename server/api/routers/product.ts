import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/api/trpc'
import * as schema from '@/server/api/validators/product'

export const productRouter = createTRPCRouter({
  // [GET] /api/trpc/product.getAll
  getAll: publicProcedure.input(schema.query).query(async ({ input, ctx }) => {
    const products = await ctx.db.product.findMany({
      where: { ...(input.q && { name: { contains: input.q } }) },
      take: input.limit,
      skip: input.limit * (input.page - 1),
      orderBy: { createdAt: 'desc' },
      include: { category: true, owner: true },
    })
    return products
  }),

  // [POST] /api/trpc/product.create
  create: protectedProcedure.input(schema.create).mutation(async ({ input, ctx }) => {
    const product = await ctx.db.product.create({
      data: {
        name: input.name,
        description: input.description,
        category: { connect: { id: input.category } },
        ...(input.image && { image: input.image }),
        price: input.price,
        stock: input.stock,
        owner: { connect: { id: ctx.session.user.id } },
      },
    })
    return product
  }),
})
