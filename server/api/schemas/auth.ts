import { z } from 'zod'

const passwordValidator = z.string()

export const authSchema = {
  signUp: z
    .object({
      name: z.string().min(1, 'Name is required'),
      email: z.string().email('Invalid email'),
      password: passwordValidator,
      confirmPassword: passwordValidator,
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: 'Passwords do not match',
    }),

  signIn: z.object({
    email: z.string().email('Invalid email'),
    password: passwordValidator,
  }),
}
