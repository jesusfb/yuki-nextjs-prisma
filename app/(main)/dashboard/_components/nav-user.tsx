import * as icons from 'lucide-react'

import * as av from '@/components/ui/avatar'
import * as dm from '@/components/ui/dropdown-menu'

const user = {
  name: 'John Doe',
  email: 'a',
  avatar: 'https://avatars.dicebear.com/api/human/johndoe.svg',
}

export const NavUser: React.FC = () => {
  return (
    <dm.DropdownMenu>
      <dm.DropdownMenuTrigger className="w-full rounded-md outline-none ring-ring hover:bg-accent focus-visible:ring-2 data-[state=open]:bg-accent">
        <div className="flex items-center gap-2 px-2 py-1.5 text-left text-sm transition-all">
          <av.Avatar className="h-7 w-7 rounded-md border">
            <av.AvatarImage
              src={user.avatar}
              alt={user.name}
              className="animate-in fade-in-50 zoom-in-90"
            />
            <av.AvatarFallback className="rounded-md">CN</av.AvatarFallback>
          </av.Avatar>
          <div className="grid flex-1 leading-none">
            <div className="font-medium">{user.name}</div>
            <div className="overflow-hidden text-xs text-muted-foreground">
              <div className="line-clamp-1">{user.email}</div>
            </div>
          </div>
          <icons.ChevronsUpDown className="ml-auto mr-0.5 h-4 w-4 text-muted-foreground/50" />
        </div>
      </dm.DropdownMenuTrigger>
      <dm.DropdownMenuContent className="w-56" align="end" side="right" sideOffset={4}>
        <dm.DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm transition-all">
            <av.Avatar className="h-7 w-7 rounded-md">
              <av.AvatarImage src={user.avatar} alt={user.name} />
              <av.AvatarFallback>CN</av.AvatarFallback>
            </av.Avatar>
            <div className="grid flex-1">
              <div className="font-medium">{user.name}</div>
              <div className="overflow-hidden text-xs text-muted-foreground">
                <div className="line-clamp-1">{user.email}</div>
              </div>
            </div>
          </div>
        </dm.DropdownMenuLabel>
        <dm.DropdownMenuSeparator />
        <dm.DropdownMenuGroup>
          <dm.DropdownMenuItem className="gap-2">
            <icons.BadgeCheck className="h-4 w-4 text-muted-foreground" />
            Account
          </dm.DropdownMenuItem>
          <dm.DropdownMenuItem className="gap-2">
            <icons.CreditCard className="h-4 w-4 text-muted-foreground" />
            Billing
          </dm.DropdownMenuItem>
          <dm.DropdownMenuItem className="gap-2">
            <icons.Bell className="h-4 w-4 text-muted-foreground" />
            Notifications
          </dm.DropdownMenuItem>
        </dm.DropdownMenuGroup>
        <dm.DropdownMenuSeparator />
        <dm.DropdownMenuItem className="gap-2">
          <icons.LogOut className="h-4 w-4 text-muted-foreground" />
          Log out
        </dm.DropdownMenuItem>
      </dm.DropdownMenuContent>
    </dm.DropdownMenu>
  )
}
