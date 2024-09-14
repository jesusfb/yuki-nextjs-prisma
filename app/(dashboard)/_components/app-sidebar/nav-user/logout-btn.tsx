'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

import { signOut } from '@/server/actions'

export const LogoutBtn: React.FC = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  return (
    <DropdownMenuItem className="gap-2" onClick={handleLogout}>
      <LogOut className="h-4 w-4 text-muted-foreground" />
      Log out
    </DropdownMenuItem>
  )
}
