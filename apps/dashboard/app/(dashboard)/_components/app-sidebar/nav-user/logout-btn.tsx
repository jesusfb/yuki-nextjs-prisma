'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

import { DropdownMenuItem } from '@yuki/ui/dropdown-menu'

import { signOut } from '@/lib/actions'

export const LogoutBtn: React.FC = () => {
  const router = useRouter()

  const action = async (formData: FormData) => {
    await signOut(formData)
    router.push('/sign-in')
  }

  return (
    <DropdownMenuItem className="gap-2" asChild>
      <form action={action}>
        <LogOut className="h-4 w-4 text-muted-foreground" />
        Log out
      </form>
    </DropdownMenuItem>
  )
}
