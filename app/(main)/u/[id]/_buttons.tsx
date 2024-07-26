'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

export const Buttons: React.FC<{ userId: string }> = ({ userId }) => {
  const router = useRouter()
  const utils = api.useUtils()

  const { mutate: logout, isPending } = api.auth.signOut.useMutation({
    onSuccess: async () => {
      await utils.auth.me.invalidate()
      router.push('/')
    },
  })

  return (
    <div className="grid grid-cols-1 gap-2 md:col-span-2 md:col-start-5 md:grid-cols-2">
      <Button onClick={() => router.push(`/u/${userId}/edit`)} className="w-full">
        Edit profile
      </Button>

      <Button onClick={() => logout()} className="w-full" isLoading={isPending}>
        Logout
      </Button>
    </div>
  )
}
