'use client'

import Link from 'next/link'
import { toast } from 'sonner'

import { FormField } from '@/components/ui/form-field'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

export const ForgotPasswordForm: React.FC = () => {
  const { mutate, isPending, error } = api.auth.forgotPassword.useMutation({
    onSuccess: () => {
      toast.success('Reset link sent', {
        description: 'Check your email for the reset link',
        action: (
          <a href="https://mail.google.com" target="_blank" rel="noreferrer">
            Open Gmail
          </a>
        ),
      })
    },
    onError: (error) => {
      if (!error.data?.zodError)
        toast.error('Something went wrong. Please try again later.', {
          description: error.message,
        })
    },
  })

  const action = async (formData: FormData) => {
    mutate({ email: String(formData.get('email')) })
  }

  return (
    <form action={action} className="space-y-4">
      <FormField
        name="email"
        type="email"
        placeholder="yuki@tiesen.id.vn"
        message={error?.data?.zodError?.email?.at(0)}
        disabled={isPending}
      />

      <div className="flex items-center justify-between">
        <Link href="/sign-in" className="text-sm">
          Remembered password? <span className="hover:underline">Sign in</span>
        </Link>

        <Link href="/sign-up" className="text-sm">
          Don&apos;t have an account? <span className="hover:underline">Sign up</span>
        </Link>
      </div>

      <Button className="w-full" isLoading={isPending}>
        Send reset link
      </Button>
    </form>
  )
}
