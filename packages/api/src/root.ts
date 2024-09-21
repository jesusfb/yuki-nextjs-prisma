import { authRouter } from './routers/auth'
import { productRouter } from './routers/post'
import { createTRPCRouter } from './trpc'

export const appRouter = createTRPCRouter({
  auth: authRouter,
  product: productRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
