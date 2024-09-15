import { z } from 'zod'

export const query = z.object({
  q: z.string().optional(),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().default(10),
})
export type Query = z.infer<typeof query>

export const updateProfile = z.object({
  name: z.string().min(4, 'Name must be at least 4 characters long'),
  avatar: z.string().url().or(z.null()),
})

export const updateRole = z.object({
  userId: z.string(),
  role: z.enum(['USER', 'ADMIN']),
})
