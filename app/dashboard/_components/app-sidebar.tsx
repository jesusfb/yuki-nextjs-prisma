import * as icons from 'lucide-react'
import Image from 'next/image'

import { NavMain } from '@/app/dashboard/_components/nav-main'
import { NavSecondary } from '@/app/dashboard/_components/nav-secondary'
import { NavUser } from '@/app/dashboard/_components/nav-user'
import * as sidebar from '@/components/ui/sidebar'

export const AppSidebar: React.FC = () => (
  <sidebar.Sidebar>
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

    <sidebar.SidebarContent>
      <sidebar.SidebarItem>
        <sidebar.SidebarLabel>Admin</sidebar.SidebarLabel>
        <NavMain items={data.adminNav} />
      </sidebar.SidebarItem>
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
      <NavUser />
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
    { title: 'Profile', url: '/dashboard/profile', icon: icons.User },
    { title: 'Your Orders', url: '/dashboard/profile/orders', icon: icons.ShoppingBag },
    { title: 'Settings', url: '/dashboard/settings', icon: icons.Settings },
  ],

  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: icons.LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: icons.Send,
    },
  ],
}
