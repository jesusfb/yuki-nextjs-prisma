'use client'

import { useRouter } from 'next/navigation'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'

import { api } from '@/lib/trpc/react'

interface Props {
  searchParams: { token: string; email: string }
}

export const ResetPasswordForm: React.FC<Props> = ({ searchParams }) => {
  const router = useRouter()
  const { mutate, isPending, error } = api.auth.resetPassword.useMutation({
    onSuccess: () => router.push('/sign-in'),
  })

  const action = (formData: FormData) => {
    // @ts-expect-error zod types are not inferred
    mutate({ ...Object.fromEntries(formData), ...searchParams })
  }
  return (
    <CardContent asChild>
      <form className="space-y-4" action={action}>
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
          Reset Password
        </Button>
      </form>
    </CardContent>
  )
}

const fields = [
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Confirm Password',
  },
]
