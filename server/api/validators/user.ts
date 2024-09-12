import { z } from 'zod'

export const updateProfile = z.object({
  name: z.string().min(4, 'Name must be at least 4 characters long'),
  avatar: z.string().url().or(z.null()),
})
