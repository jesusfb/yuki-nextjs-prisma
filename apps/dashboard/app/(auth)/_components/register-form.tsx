'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@yuki/ui/button'
import { FormField } from '@yuki/ui/form-field'

import { api } from '@/lib/trpc/react'

export const RegisterForm: React.FC = () => {
  const router = useRouter()

  const { mutate, isPending, error } = api.auth.signUp.useMutation({
    onSuccess: () => {
      router.push('/sign-in')
    },
  })

  const action = (formData: FormData) => {
    // @ts-expect-error zod types are not inferred
    mutate(Object.fromEntries(formData))
  }

  return (
    <form action={action}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          {...field}
          disabled={isPending}
          message={error?.data?.zodError?.[field.name]?.at(0)}
        />
      ))}

      {!error?.data?.zodError && <small className="text-destructive">{error?.message}</small>}

      <Button className="w-full" disabled={isPending}>
        Register
      </Button>

      <div className="text-center text-sm">
        Already have an account?{' '}
        <button type="button" onClick={() => router.push('sign-in')} className="underline">
          Sign in
        </button>
      </div>
    </form>
  )
}

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Yuki' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'yuki@example.com' },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Confirm Password',
  },
]
