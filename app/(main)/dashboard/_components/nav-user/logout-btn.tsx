'use client'

import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { api } from '@/lib/trpc/react'

export const LogoutBtn: React.FC = () => {
  const router = useRouter()
  const { mutate } = api.auth.signOut.useMutation({ onSuccess: () => router.refresh() })

  const handleLogout = () => mutate()

  return (
    <DropdownMenuItem className="gap-2" onClick={handleLogout}>
      <LogOut className="h-4 w-4 text-muted-foreground" />
      Log out
    </DropdownMenuItem>
  )
}
