import { z } from 'zod'

export { query } from '@/server/api/validators/utils'

export const create = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  image: z.string().url('Image must be a valid URL').optional(),
})
