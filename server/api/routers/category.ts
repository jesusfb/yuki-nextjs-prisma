import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const categoryRouter = createTRPCRouter({
  getCategories: publicProcedure.query(async ({ ctx }) => {
    const categories = await ctx.db.category.findMany({
      include: {
        _count: { select: { products: true } },
      },
    })

    return categories.map((category) => ({
      id: category.id,
      name: category.name,
      numberOfProducts: category._count.products,
    }))
  }),
})
