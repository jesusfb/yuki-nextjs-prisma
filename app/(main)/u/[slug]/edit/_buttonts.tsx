'use client'

import { useTheme } from 'next-themes'
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
import { BarButton, Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

export const Buttons: React.FC<{ slug: string }> = ({ slug }) => {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const { mutate, isPending } = api.user.deleteAccount.useMutation({
    onSuccess: async () => {
      toast.success('Account deleted')
      router.push('/')
      router.refresh()
    },
    onError: (error) => !error.data?.zodError && toast.error(error.message),
  })

  return (
    <div className="flex flex-col gap-4">
      <BarButton onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Change Theme
      </BarButton>

      <BarButton onClick={() => router.push(`/u/${slug}/edit/change-password`)}>
        Change Password
      </BarButton>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <BarButton className="text-destructive">Delete Account</BarButton>
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
