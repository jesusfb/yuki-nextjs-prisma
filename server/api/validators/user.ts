import { z } from 'zod'

export { query } from '@/server/api/validators/utils'

export const updateProfile = z.object({
  name: z.string().min(4, 'Name must be at least 4 characters long'),
  avatar: z.string().url().or(z.null()),
})

export const updateRole = z.object({
  userId: z.string(),
  role: z.enum(['USER', 'ADMIN']),
})
