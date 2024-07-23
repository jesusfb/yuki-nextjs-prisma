'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

export interface Props {
  searchParams: {
    email: string
    token: string
  }
}

export const Form: React.FC<Props> = ({ searchParams }) => {
  const router = useRouter()
  const { mutate, isPending, error } = api.auth.resetPassword.useMutation({
    onSuccess: () => {
      toast.success('Password reset successfully', {
        description: 'You can now redirect to sign in page',
      })
      router.push('/sign-in')
    },
    onError: (error) => {
      if (!error.data?.zodError)
        toast.error('Reset password failed', { description: error.message })
    },
  })

  const action = async (formData: FormData) => {
    const data = Object.fromEntries(formData) as {
      password: string
      confirmPassword: string
    }
    mutate({ ...searchParams, ...data })
  }

  return (
    <form action={action} className="space-y-4">
      <FormField
        name="password"
        label="Password"
        type="password"
        placeholder="********"
        message={error?.data?.zodError?.password?.at(0)}
        disabled={isPending}
      />

      <FormField
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="********"
        message={error?.data?.zodError?.confirmPassword?.at(0)}
        disabled={isPending}
      />

      <Button className="w-full" isLoading={isPending}>
        Reset Password
      </Button>
    </form>
  )
}
