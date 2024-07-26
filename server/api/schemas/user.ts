import { z } from 'zod'

export const userSchema = {
  id: z.object({
    id: z.string(),
  }),

  edit: z.object({
    name: z.string().min(4, 'Name must be at least 4 characters').optional(),
    image: z.string().url('Invalid image URL').optional(),
    address: z.string().min(10, 'Address must be at least 10 characters').optional(),
  }),
}
