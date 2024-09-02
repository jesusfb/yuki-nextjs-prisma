'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { FormField } from '@/components/ui/form-field'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'
import { setCookie } from '@/server/actions'

export const SignInForm: React.FC = () => {
  const router = useRouter()

  const { mutate, isPending, error } = api.auth.signIn.useMutation({
    onSuccess: async (data) => {
      await setCookie(data.sessionCookie)
      toast.success('Login success')
      router.push('/')
    },
    onError: (error) => {
      if (!error.data?.zodError) toast.error('Login fail', { description: error.message })
    },
  })

  const action = async (formData: FormData) => {
    const data = Object.fromEntries(formData) as InputField
    mutate(data)
  }

  return (
    <form action={action} className="space-y-4">
      {fields.map((field) => (
        <FormField
          {...field}
          key={field.name}
          disabled={isPending}
          message={error?.data?.zodError?.[field.name]?.at(0)}
        />
      ))}

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => router.push('/forgot-password')}
          className="text-sm hover:underline"
        >
          Forgot password?
        </button>

        <button type="button" onClick={() => router.push('/sign-up')} className="text-sm">
          Don&apos;t have an account? <span className="hover:underline">Sign up</span>
        </button>
      </div>

      <Button className="w-full" isLoading={isPending}>
        Login
      </Button>
    </form>
  )
}

const fields = [
  { name: 'email', label: 'Email', placeholder: 'abc@tiesen.id.vn', type: 'email' },
  { name: 'password', label: 'Password', placeholder: '********', type: 'password' },
]

type InputField = {
  email: string
  password: string
}
