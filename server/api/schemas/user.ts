import { z } from 'zod'

export const userSchema = {
  id: z.object({
    id: z.string(),
  }),

  getUsers: z.object({
    q: z.string().optional(),
  }),

  edit: z.object({
    name: z.string().min(4, 'Name must be at least 4 characters'),
    image: z.string().url('Invalid image URL').optional(),
    address: z.string().min(10, 'Address must be at least 10 characters'),
  }),

  changeRole: z.object({
    id: z.string(),
    role: z.enum(['USER', 'ADMIN']),
  }),
}
