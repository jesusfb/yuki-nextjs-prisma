'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import * as card from '@/components/ui/card'

import { api } from '@/lib/trpc/react'

export const UnlinkDiscordForm: React.FC = () => {
  const router = useRouter()

  const { mutate, isPending } = api.auth.unlinkDiscord.useMutation({
    onSuccess: async () => {
      router.back()
      await new Promise((resolve) => setTimeout(resolve, 500))
      router.refresh()
    },
  })

  return (
    <card.Card asChild>
      <form action={() => mutate()}>
        <card.CardHeader>
          <card.CardTitle>Unlink your Discord account</card.CardTitle>
          <card.CardDescription>
            If you unlink your Discord account, you will no longer be able to use Discord to log in
            to your account.
          </card.CardDescription>
        </card.CardHeader>

        <card.CardFooter className="justify-end gap-4">
          <Button disabled={isPending}>Confirm</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={isPending}
          >
            Cancel
          </Button>
        </card.CardFooter>
      </form>
    </card.Card>
  )
}
