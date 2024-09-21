import { createTRPCRouter, publicProcedure } from '../trpc'

export const productRouter = createTRPCRouter({
  hello: publicProcedure.query(async () => {
    return 'world'
  }),
})
