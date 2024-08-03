'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

export const Buttons: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter()

  const { mutate, isPending } = api.user.deleteAccount.useMutation({
    onSuccess: async () => {
      toast.success('Account deleted')
      router.push('/')
      router.refresh()
    },
    onError: (error) => !error.data?.zodError && toast.error(error.message),
  })

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
            <Button onClick={() => mutate()} isLoading={isPending}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
