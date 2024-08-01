import { z } from 'zod'

export const categorySchema = {
  id: z.object({ id: z.string() }),
  create: z.object({
    name: z.string().min(1, 'Name is required'),
    image: z.string().optional(),
  }),
  update: z.object({
    id: z.string(),
    name: z.string().min(1, 'Name is required').optional(),
    image: z.string().optional(),
  }),
}
