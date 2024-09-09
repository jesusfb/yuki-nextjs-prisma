'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { api } from '@/lib/trpc/react'
import { setCookie } from '@/server/actions'

export const LoginForm: React.FC = () => {
  const router = useRouter()

  const { mutate, isPending, error } = api.auth.signIn.useMutation({
    onSuccess: async ({ name, value, attributes }) => {
      await setCookie({ name, value, attributes })
      router.push('/')
    },
  })

  const action = (formData: FormData) => {
    // @ts-expect-error zod types are not inferred
    mutate(Object.fromEntries(formData))
  }

  return (
    <CardContent asChild>
      <form className="space-y-4" action={action}>
        <fieldset className="grid gap-2" disabled={isPending}>
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" placeholder="yuki@example.com" />
          <small className="text-xs text-destructive">{error?.data?.zodError?.email}</small>
        </fieldset>

        <fieldset className="grid gap-2" disabled={isPending}>
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <button
              onClick={() => router.push('/forgot-password')}
              className="ml-auto inline-block text-xs underline"
            >
              Forgot your password?
            </button>
          </div>
          <Input name="password" type="password" placeholder="Password" />
          <small className="text-xs text-destructive">{error?.data?.zodError?.password}</small>
        </fieldset>

        {!error?.data?.zodError && <small className="text-destructive">{error?.message}</small>}

        <Button className="w-full" disabled={isPending}>
          Login
        </Button>

        <div className="text-center text-sm">
          Don&apos;t have an account?{' '}
          <button type="button" onClick={() => router.push('sign-up')} className="underline">
            Sign up
          </button>
        </div>
      </form>
    </CardContent>
  )
}
