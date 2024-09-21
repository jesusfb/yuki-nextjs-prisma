import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { categorySchema as schema } from '../validators/category'

export const categoryRouter = createTRPCRouter({
  // [GET] /api/trpc/category.getAll
  getAll: publicProcedure.input(schema.query).query(async ({ input, ctx }) => {
    const categories = await ctx.db.category.findMany({
      include: { _count: { select: { products: true } } },
      orderBy: { createdAt: 'desc' },
      ...(input.q && { where: { name: { contains: input.q } } }),
      ...(!input.noLimit && {
        take: input.limit,
        skip: input.limit * (input.page - 1),
      }),
    })
    return categories
  }),

  // [POST] /api/trpc/category.create
  create: protectedProcedure.input(schema.create).mutation(async ({ input, ctx }) => {
    const category = await ctx.db.category.create({
      data: {
        name: input.name,
        description: input.description,
        ...(input.image && { image: input.image }),
      },
    })
    return category
  }),
})
