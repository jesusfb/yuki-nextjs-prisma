'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { api } from '@/lib/trpc/react'
import { toast } from 'sonner'

export const LoginForm: React.FC = () => {
  const router = useRouter()

  const { mutate, isPending, error } = api.auth.signIn.useMutation({
    onSuccess: () => {
      toast.success('Logged in successfully')
      router.push('/')
    },
    onError: (error) => !error.data?.zodError && toast.error(error.message),
  })

  const action = async (formData: FormData) => {
    mutate({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    })
  }

  return (
    <CardContent asChild>
      <form className="grid gap-4" action={action}>
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

        <Button className="w-full" disabled={isPending}>
          Login
        </Button>

        <div className="text-center text-sm">
          Don&apos;t have an account?{' '}
          <button onClick={() => router.push('sign-up')} className="underline">
            Sign up
          </button>
        </div>
      </form>
    </CardContent>
  )
}
