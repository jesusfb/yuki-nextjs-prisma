'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/?' },
  { name: 'Categories', href: '/dashboard/categories' },
  { name: 'Products', href: '/dashboard/products' },
  { name: 'Orders', href: '/dashboard/orders' },
  { name: 'Customers', href: '/dashboard/customers' },
]

export const Navigation: React.FC = () => {
  const pathName = usePathname()

  return (
    <nav className="flex flex-1 flex-col gap-2 p-4">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            'rounded-lg px-3 py-2',
            pathName.startsWith(item.href)
              ? 'bg-accent text-accent-foreground'
              : 'hover:bg-accent hover:text-accent-foreground',
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
