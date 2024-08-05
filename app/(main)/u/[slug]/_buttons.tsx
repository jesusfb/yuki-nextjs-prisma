'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

export const ActionBtn: React.FC<{ slug: string }> = ({ slug }) => {
  const router = useRouter()

  const { mutate: logout, isPending } = api.auth.signOut.useMutation({
    onSuccess: async () => {
      router.push('/')
      router.refresh()
    },
  })

  return (
    <div className="col-span-2 grid w-full grid-cols-1 gap-2 place-self-end md:col-start-5 md:grid-cols-2">
      <Button onClick={() => router.push(`/u/${slug}/edit`)} disabled={isPending}>
        Edit profile
      </Button>

      <Button variant="destructive" onClick={() => logout()} isLoading={isPending}>
        Logout
      </Button>
    </div>
  )
}

export const FollowBtn: React.FC<{ userID: string; isFollowed: boolean }> = (props) => {
  const router = useRouter()
  const { mutate, isPending, data } = api.user.toggleFollow.useMutation({
    onSuccess: () => router.refresh(),
  })

  const isFollowed = data?.isFollowed ?? props.isFollowed

  return (
    <Button
      isLoading={isPending}
      className="col-span-2 w-full place-self-end md:col-start-5"
      onClick={() => mutate({ id: props.userID })}
    >
      {isFollowed ? 'Unfollow' : 'Follow'}
    </Button>
  )
}
