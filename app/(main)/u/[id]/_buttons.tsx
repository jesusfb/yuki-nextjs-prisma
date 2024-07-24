import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/server'
import { FollowBtn } from './_follow-btn'

interface Props {
  isSelf: boolean
  userId: string
}

export const Buttons: React.FC<Props> = ({ isSelf, userId }) => {
  const logout = async () => {
    'use server'
    await api.auth.signOut()
    redirect('/')
  }

  const redirectToEdit = async () => {
    'use server'
    redirect(`/u/${userId}/edit`)
  }

  if (!isSelf) return <FollowBtn userID={userId} />

  return (
    <div className="grid grid-cols-1 gap-2 md:col-span-2 md:col-start-5 md:grid-cols-2">
      <form action={redirectToEdit}>
        <Button className="w-full">Edit profile</Button>
      </form>

      <form action={logout}>
        <Button className="w-full">Logout</Button>
      </form>
    </div>
  )
}
