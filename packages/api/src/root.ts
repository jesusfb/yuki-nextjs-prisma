import { authRouter } from './routers/auth'
import { categoryRouter } from './routers/category'
import { productRouter } from './routers/product'
import { createTRPCRouter } from './trpc'

export const appRouter = createTRPCRouter({
  auth: authRouter,
  product: productRouter,
  category: categoryRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
