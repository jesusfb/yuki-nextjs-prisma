import { type User } from '@prisma/client'

import * as dm from '@/components/ui/dropdown-menu'
import { LogoutBtn } from '@/app/dashboard/_components/app-sidebar/nav-user/logout-btn'
import { UserCard } from '@/app/dashboard/_components/app-sidebar/nav-user/user-card'
import { UserMenu } from '@/app/dashboard/_components/app-sidebar/nav-user/user-menu'

export const NavUser: React.FC<{ user: User }> = ({ user }) => (
  <dm.DropdownMenu>
    <dm.DropdownMenuTrigger className="w-full rounded-md outline-none ring-ring hover:bg-accent focus-visible:ring-2 data-[state=open]:bg-accent">
      <UserCard user={user} icon />
    </dm.DropdownMenuTrigger>

    <dm.DropdownMenuContent className="w-56" align="end" side="right" sideOffset={4}>
      <dm.DropdownMenuLabel className="p-0 font-normal">
        <UserCard user={user} />
      </dm.DropdownMenuLabel>

      <dm.DropdownMenuSeparator />

      <UserMenu />

      <dm.DropdownMenuSeparator />

      <LogoutBtn />
    </dm.DropdownMenuContent>
  </dm.DropdownMenu>
)
