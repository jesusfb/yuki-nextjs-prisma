import { z } from 'zod'

import { query } from './utils'

export const productSchema = {
  query,

  create: z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string().url().optional(),
    price: z.number().positive(),
    stock: z.number().int().positive(),
  }),
}
