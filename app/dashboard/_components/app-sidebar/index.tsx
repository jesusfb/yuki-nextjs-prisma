import type { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import * as icons from 'lucide-react'

import * as sidebar from '@/components/ui/sidebar'
import { NavMain } from '@/app/dashboard/_components/app-sidebar/nav-main'
import { NavSecondary } from '@/app/dashboard/_components/app-sidebar/nav-secondary'
import { NavUser } from '@/app/dashboard/_components/app-sidebar/nav-user'

export const AppSidebar: React.FC<{ user: User }> = ({ user }) => (
  <sidebar.Sidebar>
    <Link href="/dashboard" passHref>
      <sidebar.SidebarHeader className="flex items-center gap-4">
        <Image
          src="/logo.svg"
          alt="Yuki"
          width={24}
          height={24}
          className="object-cover dark:invert"
        />
        <span className="text-lg font-bold">Dashboard</span>
      </sidebar.SidebarHeader>
    </Link>

    <sidebar.SidebarContent>
      {user.role === 'ADMIN' && (
        <sidebar.SidebarItem>
          <sidebar.SidebarLabel>Admin</sidebar.SidebarLabel>
          <NavMain items={data.adminNav} />
        </sidebar.SidebarItem>
      )}
      <sidebar.SidebarItem>
        <sidebar.SidebarLabel>User</sidebar.SidebarLabel>
        <NavMain items={data.userNav} />
      </sidebar.SidebarItem>
      <sidebar.SidebarItem className="mt-auto">
        <sidebar.SidebarLabel>Help</sidebar.SidebarLabel>
        <NavSecondary items={data.navSecondary} />
      </sidebar.SidebarItem>
    </sidebar.SidebarContent>

    <sidebar.SidebarFooter>
      <NavUser user={user} />
    </sidebar.SidebarFooter>
  </sidebar.Sidebar>
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
    { title: 'Back to Site', url: '/', icon: icons.Home },
    { title: 'Account', url: '/dashboard/account', icon: icons.User },
    { title: 'Your Cart', url: '/dashboard/account/cart', icon: icons.ShoppingCart },
    { title: 'Settings', url: '/dashboard/account/settings', icon: icons.Settings },
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
