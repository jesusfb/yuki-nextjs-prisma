import { z } from 'zod'

export const productSchema = {
  id: z.object({ id: z.string() }),
  createProduct: z.object({
    name: z.string().min(4, 'Name must be at least 4 characters long'),
    description: z.string().min(10, 'Description must be at least 10 characters long'),
    price: z.number().min(0.01, 'Price must be at least 0.01'),
    stock: z.number().int().min(1, 'Stock must be at least 1'),
    category: z.string(),
    image: z.string().optional(),
  }),
  updateProduct: z.object({
    id: z.string(),
    name: z.string().min(4, 'Name must be at least 4 characters long'),
    description: z.string().min(10, 'Description must be at least 10 characters long'),
    price: z.number().min(0.01, 'Price must be at least 0.01'),
    stock: z.number().int().min(1, 'Stock must be at least 1'),
    category: z.string(),
    image: z.string().optional(),
  }),
}
