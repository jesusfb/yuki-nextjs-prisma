import { type LucideIcon } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

export const NavSecondary: React.FC<NavSecondaryProps> = ({ className, items }) => {
  if (!items?.length) return null

  return (
    <ul className={cn('grid gap-0.5', className)}>
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={item.url}
            className="flex h-7 items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-xs ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2"
            {...(item.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <item.icon className="h-4 w-4 shrink-0 translate-x-0.5 text-muted-foreground" />
            <div className="line-clamp-1 grow overflow-hidden pr-6 font-medium text-muted-foreground">
              {item.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

interface NavSecondaryProps extends React.ComponentProps<'ul'> {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isExternal?: boolean
  }[]
}
