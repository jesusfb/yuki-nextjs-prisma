import { z } from 'zod'

const passwordValidator = z
  .string()
  .regex(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    'Password must contain at least 8 characters, one letter, one number and one special character',
  )

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

  forgotPassword: z.object({
    email: z.string().email('Invalid email'),
  }),

  resetPassword: z
    .object({
      token: z.string(),
      email: z.string().email('Invalid email'),
      password: passwordValidator,
      confirmPassword: passwordValidator,
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: 'Passwords do not match',
    }),

  changePassword: z
    .object({
      isLogout: z.enum(['off', 'on']).default('off'),
      currentPassword: passwordValidator,
      newPassword: passwordValidator,
      confirmNewPassword: passwordValidator,
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      path: ['confirmNewPassword'],
      message: 'Passwords do not match',
    }),
}
