'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { api } from '@/lib/trpc/react'
import { toast } from 'sonner'

export const Buttons: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter()
  const utils = api.useUtils()
  const { mutate, isPending } = api.user.deleteAccount.useMutation({
    onSuccess: async () => {
      await utils.auth.me.invalidate()
      toast.success('Account deleted')
      router.push('/')
    },
    onError: (error) => !error.data?.zodError && toast.error(error.message),
  })

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button variant="secondary" onClick={() => router.push(`/u/${id}/edit/change-password`)}>
        Change Password
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete your account.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => mutate()} disabled={isPending}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
