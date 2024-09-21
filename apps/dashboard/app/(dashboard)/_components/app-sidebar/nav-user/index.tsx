import type { Session, User } from '@yuki/db'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@yuki/ui/dropdown-menu'

import { LogoutBtn } from '@/app/(dashboard)/_components/app-sidebar/nav-user/logout-btn'
import { UserCard } from '@/app/(dashboard)/_components/app-sidebar/nav-user/user-card'
import { UserMenu } from '@/app/(dashboard)/_components/app-sidebar/nav-user/user-menu'

export const NavUser: React.FC<{ session: Session & { user: User } }> = ({ session }) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="w-full rounded-md outline-none ring-ring hover:bg-accent focus-visible:ring-2 data-[state=open]:bg-accent">
      <UserCard user={session.user} icon />
    </DropdownMenuTrigger>

    <DropdownMenuContent className="w-56" align="end" side="right" sideOffset={4}>
      <DropdownMenuLabel className="p-0 font-normal">
        <UserCard user={session.user} />
      </DropdownMenuLabel>

      <DropdownMenuSeparator />

      <UserMenu />

      <DropdownMenuSeparator />

      <LogoutBtn sessionId={session.id} />
    </DropdownMenuContent>
  </DropdownMenu>
)
