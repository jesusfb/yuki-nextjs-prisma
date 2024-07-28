'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

export const ActionBtn: React.FC<{ userId: string }> = ({ userId }) => {
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
      <Button onClick={() => router.push(`/u/${userId}/edit`)} disabled={isPending}>
        Edit profile
      </Button>

      <Button variant="destructive" onClick={() => logout()} isLoading={isPending}>
        Logout
      </Button>
    </div>
  )
}

export const FollowBtn: React.FC<{ userID: string; isFollowed: boolean }> = (props) => {
  const { mutate, isPending, data } = api.user.toggleFollow.useMutation()

  const isFollowed = data?.isFollowed ?? props.isFollowed

  return (
    <Button
      isLoading={isPending}
      className="md:col-span-2 md:col-start-5"
      onClick={() => mutate({ id: props.userID })}
    >
      {isFollowed ? 'Unfollow' : 'Follow'}
    </Button>
  )
}
