import { authRouter } from '@/server/api/routers/auth'
import { categoryRouter } from '@/server/api/routers/category'
import { userRouter } from '@/server/api/routers/user'
import { createCallerFactory, createTRPCRouter } from '@/server/api/trpc'
import { productRouter } from './routers/product'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
  category: categoryRouter,
  product: productRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter)
