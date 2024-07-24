'use client'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

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
