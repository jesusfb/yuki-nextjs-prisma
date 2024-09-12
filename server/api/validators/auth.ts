import { z } from 'zod'

const password = z
  .string()
  .regex(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    'Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number and special character',
  )

export const signUp = z
  .object({
    name: z.string().min(4).max(50),
    email: z.string().email(),
    password,
    confirmPassword: password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const signIn = z.object({
  email: z.string().email(),
  password,
})

export const changePassword = z
  .object({
    currentPassword: password.optional(),
    newPassword: password,
    confirmPassword: password,
    isLogoutAll: z.boolean().default(false),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const forgotPassword = z.object({
  email: z.string().email(),
})

export const resetPassword = z
  .object({
    token: z.string(),
    email: z.string().email(),
    password,
    confirmPassword: password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const deleteAccount = z.object({
  confirm: z
    .string()
    .refine((data) => data === 'Delete my account', { message: 'Please type "Delete my account"' }),
  password,
})
