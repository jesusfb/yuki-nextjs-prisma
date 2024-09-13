'use client'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'

import { api } from '@/lib/trpc/react'

export const ForgotPasswordForm: React.FC = () => {
  const { mutate, isPending, error, data } = api.auth.forgotPassword.useMutation()

  const action = (formData: FormData) => {
    // @ts-expect-error zod types are not inferred
    mutate(Object.fromEntries(formData))
  }

  return (
    <CardContent asChild>
      <form className="space-y-4" action={action}>
        <FormField
          name="email"
          type="email"
          label="Email"
          placeholder="yuki@example.com"
          message={error?.data?.zodError?.email?.at(0)}
        />

        {!error?.data?.zodError && <small className="text-destructive">{error?.message}</small>}
        {data && <small>{data.message}</small>}
        <Button className="w-full" disabled={isPending}>
          Send reset link
        </Button>
      </form>
    </CardContent>
  )
}
