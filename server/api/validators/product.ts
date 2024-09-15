import { z } from 'zod'

export { query } from '@/server/api/validators/utils'

export const create = z.object({
  name: z.string(),
  description: z.string(),
  category: z.string(),
  image: z.string().url().optional(),
  price: z.number().positive(),
  stock: z.number().int().positive(),
})
