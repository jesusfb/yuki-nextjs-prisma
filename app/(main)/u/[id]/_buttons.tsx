import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/server'

export const Buttons: React.FC<{ userId: string }> = ({ userId }) => {
  const logout = async () => {
    'use server'
    await api.auth.signOut()
    redirect('/')
  }

  const redirectToEdit = async () => {
    'use server'
    redirect(`/u/${userId}/edit`)
  }

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
