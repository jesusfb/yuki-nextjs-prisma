import { TRPCError } from '@trpc/server'

import { productSchema } from '@/server/api/schemas/product'
import { adminProcedure, createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { utapi } from '@/server/uploadthing'

export const productRouter = createTRPCRouter({
  // [GET] /api/trpc/product.getProducts
  getProducts: publicProcedure.input(productSchema.getProducts).query(async ({ ctx, input }) => {
    const products = await ctx.db.product.findMany({
      where: {
        ...(input.q ? { name: { contains: input.q, mode: 'insensitive' } } : undefined),
        ...(input.category ? { categoryId: input.category } : undefined),
        stock: { gt: 0 },
      },
      select: {
        id: true,
        name: true,
        image: true,
        price: true,
      },
      orderBy: {
        [input.sortBy ?? 'createdAt']: input.orderBy ?? 'desc',
      },
    })

    return products
  }),

  // [GET] /api/trpc/product.getAdminProducts
  getAdminProducts: adminProcedure
    .input(productSchema.getProducts)
    .query(async ({ ctx, input }) => {
      const products = await ctx.db.product.findMany({
        where: input.q
          ? {
              OR: [
                { name: { contains: input.q, mode: 'insensitive' } },
                { description: { contains: input.q, mode: 'insensitive' } },
              ],
            }
          : undefined,
        include: {
          user: true,
          category: { select: { id: true, name: true } },
        },
        orderBy: { createdAt: 'desc' },
      })

      return products.map((product) => ({
        id: product.id,
        name: product.name,
        image: product.image,
        category: product.category,
        price: product.price,
        stock: product.stock,
        sold: product.sold,
        createdBy: product.user,
        createdAt: product.createdAt.toDateString(),
      }))
    }),

  // [GET] /api/trpc/product.getProduct
  getProduct: publicProcedure.input(productSchema.id).query(async ({ ctx, input }) => {
    const product = await ctx.db.product.findUnique({
      where: { id: input.id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            _count: {
              select: { products: true, followers: true, following: true },
            },
          },
        },
        category: { select: { id: true, name: true } },
      },
    })
    if (!product) throw new TRPCError({ code: 'NOT_FOUND', message: 'Product not found' })

    const relatedProducts = await ctx.db.product.findMany({
      where: { categoryId: product.category.id, id: { not: product.id } },
      take: 10,
      select: { id: true, name: true, image: true, price: true },
    })

    return {
      id: product.id,
      name: product.name,
      image: product.image,
      description: product.description,
      category: product.category,
      price: product.price,
      stock: product.stock,
      sold: product.sold,
      createdBy: product.user,
      createdAt: product.createdAt.toDateString(),
      relatedProducts: relatedProducts.length >= 1 ? relatedProducts : null,
    }
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

  // [POST] /api/trpc/product.updateProduct
  updateProduct: adminProcedure
    .input(productSchema.updateProduct)
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.db.product.findUnique({ where: { id: input.id } })
      if (!product) throw new TRPCError({ code: 'NOT_FOUND', message: 'Product not found' })

      const updatedProduct = await ctx.db.product.update({
        where: { id: input.id },
        data: {
          name: input.name,
          description: input.description,
          price: input.price,
          stock: input.stock,
          image: input.image,
          category: { connect: { id: input.category } },
        },
      })
      if (!updatedProduct)
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to update product' })

      if (product.image !== updatedProduct.image)
        await utapi.deleteFiles(product.image.split('/').pop() ?? '')

      return { success: true }
    }),

  // [POST] /api/trpc/product.deleteProduct
  deleteProduct: adminProcedure.input(productSchema.id).mutation(async ({ ctx, input }) => {
    const product = await ctx.db.product.findUnique({ where: { id: input.id } })
    if (!product) throw new TRPCError({ code: 'NOT_FOUND', message: 'Product not found' })

    await ctx.db.product.delete({ where: { id: input.id } })
    await utapi.deleteFiles(product.image.split('/').pop() ?? '')

    return { success: true }
  }),
})
