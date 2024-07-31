import { TRPCError } from '@trpc/server'

import { adminProcedure, createTRPCRouter } from '@/server/api/trpc'
import { productSchema } from '../schemas/product'
import { utapi } from '@/server/uploadthing'

export const productRouter = createTRPCRouter({
  // [GET] /api/trpc/product.getAdminProducts
  getAdminProducts: adminProcedure.query(async ({ ctx }) => {
    const products = await ctx.db.product.findMany({
      include: {
        category: { select: { name: true } },
        user: { select: { name: true } },
      },
    })

    return products.map((product) => ({
      id: product.id,
      name: product.name,
      category: product.category.name,
      price: product.price,
      stock: product.stock,
      sold: product.sold,
      createdBy: product.user.name,
      createdAt: product.createdAt.toDateString(),
    }))
  }),

  // [POST] /api/trpc/product.createProduct
  createProduct: adminProcedure
    .input(productSchema.createProduct)
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.db.product.create({
        data: {
          name: input.name,
          description: input.description,
          price: input.price,
          stock: input.stock,
          sold: 0,
          image: input.image,
          category: { connect: { id: input.category } },
          user: { connect: { id: ctx.user.id } },
        },
      })
      if (!product)
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to create product' })

      return { success: true }
    }),

  // [POST] /api/trpc/product.deleteProduct
  deleteProduct: adminProcedure.input(productSchema.id).mutation(async ({ ctx, input }) => {
    const product = await ctx.db.product.findUnique({ where: { id: input.id } })
    if (!product) throw new TRPCError({ code: 'NOT_FOUND', message: 'Product not found' })

    await ctx.db.product.delete({ where: { id: input.id } })
    if (product.image) await utapi.deleteFiles(product.image.split('/').pop() ?? '')

    return { success: true }
  }),
})
