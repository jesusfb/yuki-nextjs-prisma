'use client'

import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { api } from '@/lib/trpc/react'

export const Form: React.FC = () => {
  const utils = api.useUtils()
  const { mutate, isPending, error } = api.auth.changePassword.useMutation({
    onSuccess: () => toast.success('Password changed successfully') && utils.auth.me.invalidate(),
    onError: (error) => !error.data?.zodError && toast.error(error.message),
  })

  const action = async (formData: FormData) => {
    const data = Object.fromEntries(formData) as Field
    mutate(data)
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
        name="isLogout"
        label="Logout from all devices"
        className="flex gap-2 space-y-0"
        disabled={isPending}
        asChild
      >
        <Checkbox />
      </FormField>

      <Button className="w-full" isLoading={isPending}>
        Save Changes
      </Button>
    </form>
  )
}

type Field = {
  currentPassword: string
  newPassword: string
  confirmNewPassword: string
  isLogout: 'off' | 'on'
}

const fields = [
  {
    name: 'currentPassword',
    label: 'Current Password',
    type: 'password',
    placeholder: 'Enter your current password',
  },
  {
    name: 'newPassword',
    label: 'New Password',
    type: 'password',
    placeholder: 'Enter your new password',
  },
  {
    name: 'confirmNewPassword',
    label: 'Confirm New Password',
    type: 'password',
    placeholder: 'Confirm your new password',
  },
]
