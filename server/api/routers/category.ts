import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const categories = await ctx.db.category.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return categories
  }),
})
