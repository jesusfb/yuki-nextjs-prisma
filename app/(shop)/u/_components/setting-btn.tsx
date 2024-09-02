'use client'

import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import * as alertDialog from '@/components/ui/alert-dialog'
import { BarButton, Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

export const SettingBtn: React.FC<{ slug: string }> = ({ slug }) => {
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

      <alertDialog.AlertDialog>
        <alertDialog.AlertDialogTrigger asChild>
          <BarButton className="text-destructive">Delete Account</BarButton>
        </alertDialog.AlertDialogTrigger>

        <alertDialog.AlertDialogContent>
          <alertDialog.AlertDialogHeader>
            <alertDialog.AlertDialogTitle>Are you sure?</alertDialog.AlertDialogTitle>
            <alertDialog.AlertDialogDescription>
              This will permanently delete your account.
            </alertDialog.AlertDialogDescription>
          </alertDialog.AlertDialogHeader>

          <alertDialog.AlertDialogFooter>
            <alertDialog.AlertDialogCancel disabled={isPending}>
              Cancel
            </alertDialog.AlertDialogCancel>

            <Button onClick={() => mutate()} isLoading={isPending}>
              Delete
            </Button>
          </alertDialog.AlertDialogFooter>
        </alertDialog.AlertDialogContent>
      </alertDialog.AlertDialog>
    </div>
  )
}
