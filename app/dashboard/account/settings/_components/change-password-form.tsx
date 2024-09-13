'use client'

import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import { signOut } from '@/server/actions'
import { api } from '@/lib/trpc/react'

export const ChangePasswordForm: React.FC = () => {
  const { mutate, isPending, error } = api.auth.changePassword.useMutation({
    onSuccess: async () => {
      toast.success('Password changed successfully', {
        description: 'Yout will be logged out in 2 second',
      })
      await new Promise((resolve) => setTimeout(resolve, 2000))
      await signOut()
    },
    onError: (error) => !error.data?.zodError && toast.error(error.message),
  })

  const action = async (formData: FormData) => {
    mutate({
      currentPassword: String(formData.get('currentPassword')),
      newPassword: String(formData.get('newPassword')),
      confirmPassword: String(formData.get('confirmPassword')),
      isLogoutAll: formData.get('isLogoutAll') === 'on',
    })
  }

  return (
    <form action={action} className="space-y-4">
      {fields.map((field) => (
        <FormField
          key={field.name}
          {...field}
          disabled={isPending}
          message={error?.data?.zodError?.[field.name]?.at(0)}
        />
      ))}

      <FormField
        name="isLogoutAll"
        label="Log out from all devices"
        className="inline-flex flex-row-reverse items-center gap-2 space-y-0"
        disabled={isPending}
        asChild
      >
        <Checkbox />
      </FormField>

      <Button className="w-full" disabled={isPending}>
        Change password
      </Button>
    </form>
  )
}

const fields = [
  {
    name: 'currentPassword',
    type: 'password',
    label: 'Current password',
    placeholder: 'Enter your current password',
  },
  {
    name: 'newPassword',
    type: 'password',
    label: 'New password',
    placeholder: 'Enter your new password',
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm password',
    placeholder: 'Confirm your new password',
  },
]
