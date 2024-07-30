import { TRPCError } from '@trpc/server'

import { categorySchema } from '@/server/api/schemas/category'
import { adminProcedure, createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { utapi } from '@/server/uploadthing'

export const categoryRouter = createTRPCRouter({
  // [GET] /api/trpc/category.getLatestCategories
  getLatestCategories: publicProcedure.query(async ({ ctx }) => {
    const categories = await ctx.db.category.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
    })

    return categories.map((category) => ({
      id: category.id,
      name: category.name,
    }))
  }),

  // [GET] /api/trpc/category.getCategories
  getCategories: adminProcedure.query(async ({ ctx }) => {
    const categories = await ctx.db.category.findMany({
      include: {
        _count: { select: { products: true } },
        user: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' },
    })

    return categories.map((category) => ({
      id: category.id,
      name: category.name,
      numberOfProducts: category._count.products,
      createdBy: category.user.name,
    }))
  }),

  // [GET] /api/trpc/category.getCategory
  getCategory: adminProcedure.input(categorySchema.id).query(async ({ ctx, input }) => {
    const category = await ctx.db.category.findUnique({
      where: { id: input.id },
      include: {
        _count: { select: { products: true } },
        user: { select: { name: true } },
      },
    })
    if (!category) throw new TRPCError({ code: 'NOT_FOUND', message: 'Category not found' })

    return {
      id: category.id,
      name: category.name,
      image: category.image,
    }
  }),

  // [POST] /api/trpc/category.createCategory
  createCategory: adminProcedure.input(categorySchema.create).mutation(async ({ ctx, input }) => {
    const newCategory = await ctx.db.category.create({
      data: {
        name: input.name,
        image: input.image,
        user: { connect: { id: ctx.user.id } },
      },
    })
    if (!newCategory)
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to create category' })

    return { success: true }
  }),

  // [POST] /api/trpc/category.update
  updateCategory: adminProcedure.input(categorySchema.update).mutation(async ({ ctx, input }) => {
    const category = await ctx.db.category.findUnique({ where: { id: input.id } })
    if (!category) throw new TRPCError({ code: 'NOT_FOUND', message: 'Category not found' })

    const newCategory = await ctx.db.category.update({
      where: { id: input.id },
      data: { name: input.name ?? category.name, image: input.image ?? category.image },
    })
    if (!newCategory)
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to update category' })

    if (category.image && category.image !== newCategory.image)
      await utapi.deleteFiles(category.image.split('/').pop() ?? '')

    return { success: true }
  }),

  // [POST] /api/trpc/category.deleteCategory
  deleteCategory: adminProcedure.input(categorySchema.id).mutation(async ({ ctx, input }) => {
    const category = await ctx.db.category.findUnique({ where: { id: input.id } })
    if (!category) throw new TRPCError({ code: 'NOT_FOUND', message: 'Category not found' })

    await ctx.db.category.delete({ where: { id: input.id } })

    return { success: true }
  }),
})
