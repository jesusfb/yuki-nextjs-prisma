import type { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import * as icons from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from '@yuki/ui/sidebar'

import { NavMain } from '@/app/(dashboard)/_components/app-sidebar/nav-main'
import { NavSecondary } from '@/app/(dashboard)/_components/app-sidebar/nav-secondary'
import { NavUser } from '@/app/(dashboard)/_components/app-sidebar/nav-user'
import { getClientUrl } from '@/lib/utils'

export const AppSidebar: React.FC<{ user: User }> = ({ user }) => (
  <Sidebar>
    <Link href="/dashboard" passHref>
      <SidebarHeader className="flex items-center gap-4">
        <Image
          src="/logo.svg"
          alt="Yuki"
          width={24}
          height={24}
          className="object-cover dark:invert"
        />
        <span className="text-lg font-bold">Dashboard</span>
      </SidebarHeader>
    </Link>

    <SidebarContent>
      {user.role === 'ADMIN' && (
        <SidebarItem>
          <SidebarLabel>Admin</SidebarLabel>
          <NavMain items={data.adminNav} />
        </SidebarItem>
      )}
      <SidebarItem>
        <SidebarLabel>User</SidebarLabel>
        <NavMain items={data.userNav} />
      </SidebarItem>
      <SidebarItem className="mt-auto">
        <SidebarLabel>Help</SidebarLabel>
        <NavSecondary items={data.navSecondary} />
      </SidebarItem>
    </SidebarContent>

    <SidebarFooter>
      <NavUser user={user} />
    </SidebarFooter>
  </Sidebar>
)

const data = {
  adminNav: [
    {
      title: 'Products',
      url: '#',
      icon: icons.Package,
      items: [
        { title: 'All Products', url: '/dashboard/products', icon: icons.List },
        { title: 'Create Product', url: '/dashboard/products/create', icon: icons.Plus },
      ],
    },
    {
      title: 'Categories',
      url: '#',
      icon: icons.Grid,
      items: [
        { title: 'All Categories', url: '/dashboard/categories', icon: icons.List },
        { title: 'Create Category', url: '/dashboard/categories/create', icon: icons.Plus },
      ],
    },
    { title: 'Orders', url: '/dashboard/orders', icon: icons.ShoppingBag },
    { title: 'Customers', url: '/dashboard/customers', icon: icons.Users },
  ],

  userNav: [
    { title: 'Back to Site', url: getClientUrl(), icon: icons.Home },
    { title: 'Account', url: '/dashboard/account', icon: icons.User },
    { title: 'Your Cart', url: '/dashboard/account/cart', icon: icons.ShoppingCart },
    { title: 'Settings', url: '/dashboard/settings', icon: icons.Settings },
  ],

  navSecondary: [
    {
      title: 'Support',
      url: 'https://youtu.be/dQw4w9WgXcQ',
      icon: icons.LifeBuoy,
      isExternal: true,
    },
    {
      title: 'Feedback',
      url: 'https://youtu.be/UIp6_0kct_U',
      icon: icons.Send,
      isExternal: true,
    },
  ],
}
