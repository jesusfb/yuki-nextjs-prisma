'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

export const DeleteBtn: React.FC<{ id: string }> = ({ id }) => {
  const utils = api.useUtils()
  const { mutate, isPending } = api.user.deleteUser.useMutation({
    onSuccess: () =>
      utils.user.getUsers.invalidate().then(() => toast.success('User deleted successfully')),
    onError: (error) => toast.error(error.message),
  })

  return (
    <Button variant="destructive" onClick={() => mutate({ id })} isLoading={isPending}>
      Delete
    </Button>
  )
}
