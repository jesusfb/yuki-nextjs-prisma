import { z } from 'zod'

import { query } from './utils'

export const categorySchema = {
  query,
  create: z.object({
    name: z.string().min(1, 'Name is required'),
    description: z.string().min(1, 'Description is required'),
    image: z.string().url('Image must be a valid URL').optional(),
  }),
}
