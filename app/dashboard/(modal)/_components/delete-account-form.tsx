'use client'

import { useRouter } from 'next/navigation'

import * as card from '@/components/ui/card'
import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

export const DeleteAccountForm: React.FC = () => {
  const router = useRouter()

  const { mutate, isPending, error } = api.auth.deleteAccount.useMutation({
    onSuccess: () => router.push('/'),
  })

  const action = async (formData: FormData) => {
    mutate({
      confirm: String(formData.get('confirm')),
      password: String(formData.get('password')),
    })
  }

  return (
    <card.Card asChild>
      <form action={action}>
        <card.CardHeader>
          <card.CardTitle>Delete Account</card.CardTitle>
          <card.CardDescription>
            Are you sure you want to delete your account? All of your data will be permanently
            removed. This action cannot be undone.
          </card.CardDescription>
        </card.CardHeader>

        <card.CardContent className="space-y-4">
          <FormField
            name="confirm"
            label="To confirm, type 'Delete my account' below"
            placeholder="Delete my account"
            message={error?.data?.zodError?.confirm?.at(0)}
            disabled={isPending}
          />
          <FormField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            message={error?.data?.zodError?.password?.at(0)}
            disabled={isPending}
          />
        </card.CardContent>

        <card.CardFooter className="justify-end gap-4">
          <Button disabled={isPending}>Delete Account</Button>
          <Button type="button" variant="ghost" onClick={() => router.back()}>
            Cancel
          </Button>
        </card.CardFooter>
      </form>
    </card.Card>
  )
}
