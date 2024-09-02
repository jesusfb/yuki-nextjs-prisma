'use client'

import { useRouter } from 'next/navigation'

import { FormField } from '@/components/ui/form-field'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'
import { toast } from 'sonner'

export const SignUpForm: React.FC = () => {
  const router = useRouter()

  const { mutate, isPending, error } = api.auth.signUp.useMutation({
    onSuccess: () => {
      toast.success('Account created')
      router.push('/sign-in')
    },
    onError: (error) => {
      if (!error.data?.zodError)
        toast.error('Failed to create account', { description: error.message })
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

        <button type="button" onClick={() => router.push('/sign-in')} className="text-sm">
          Already have an account? <span className="hover:underline">Sign in</span>
        </button>
      </div>

      <Button className="w-full" isLoading={isPending}>
        Register
      </Button>
    </form>
  )
}

const fields = [
  { name: 'name', label: 'Name', placeholder: 'Yuki', type: 'text' },
  { name: 'email', label: 'Email', placeholder: 'abc@tiesen.id.vn', type: 'email' },
  { name: 'password', label: 'Password', placeholder: '********', type: 'password' },
  { name: 'confirmPassword', label: 'Confirm Password', placeholder: '********', type: 'password' },
]

type InputField = {
  name: string
  email: string
  password: string
  confirmPassword: string
}
