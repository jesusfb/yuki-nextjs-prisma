import { z } from 'zod'

const passwordSchema = z
  .string()
  .regex(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    'Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number and special character',
  )

export const schema = {
  signIn: z.object({
    email: z.string().email('Invalid email'),
    password: passwordSchema,
  }),

  signUp: z
    .object({
      name: z.string().min(4, 'Name must be at least 4 characters'),
      email: z.string().email('Invalid email'),
      password: passwordSchema,
      confirmPassword: passwordSchema,
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    }),
}
