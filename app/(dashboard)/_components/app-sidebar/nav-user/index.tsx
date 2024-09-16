import { type User } from '@prisma/client'

import * as dropdownMenu from '@/components/ui/dropdown-menu'
import { LogoutBtn } from '@/app/(dashboard)/_components/app-sidebar/nav-user/logout-btn'
import { UserCard } from '@/app/(dashboard)/_components/app-sidebar/nav-user/user-card'
import { UserMenu } from '@/app/(dashboard)/_components/app-sidebar/nav-user/user-menu'

export const NavUser: React.FC<{ user: User }> = ({ user }) => (
  <dropdownMenu.DropdownMenu>
    <dropdownMenu.DropdownMenuTrigger className="w-full rounded-md outline-none ring-ring hover:bg-accent focus-visible:ring-2 data-[state=open]:bg-accent">
      <UserCard user={user} icon />
    </dropdownMenu.DropdownMenuTrigger>

    <dropdownMenu.DropdownMenuContent className="w-56" align="end" side="right" sideOffset={4}>
      <dropdownMenu.DropdownMenuLabel className="p-0 font-normal">
        <UserCard user={user} />
      </dropdownMenu.DropdownMenuLabel>

      <dropdownMenu.DropdownMenuSeparator />

      <UserMenu />

      <dropdownMenu.DropdownMenuSeparator />

      <LogoutBtn />
    </dropdownMenu.DropdownMenuContent>
  </dropdownMenu.DropdownMenu>
)
