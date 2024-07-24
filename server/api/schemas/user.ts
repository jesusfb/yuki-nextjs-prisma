import { z } from 'zod'

export const userSchema = {
  id: z.object({
    id: z.string(),
  }),
}
