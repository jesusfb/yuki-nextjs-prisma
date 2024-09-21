'use client'

import { LogOut } from 'lucide-react'

import { DropdownMenuItem } from '@yuki/ui/dropdown-menu'

import { signOut } from '@/lib/actions'
import { getClientUrl } from '@/lib/utils'

export const LogoutBtn: React.FC<{ sessionId: string }> = ({ sessionId }) => {
  const handleLogout = async () => {
    await signOut(sessionId)
    window.location.href = `${getClientUrl()}/home`
  }

  return (
    <DropdownMenuItem onClick={handleLogout}>
      <LogOut className="mr-2 h-4 w-4 text-muted-foreground" />
      Log out
    </DropdownMenuItem>
  )
}
