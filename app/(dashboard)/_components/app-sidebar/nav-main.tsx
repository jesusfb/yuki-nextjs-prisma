import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

import { cn } from '@/lib/utils'

export const NavMain: React.FC<NavMainProps> = ({ className, items }) => (
  <ul className={cn('grid gap-0.5', className)}>
    {items.map((item) => (
      <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
        <li>
          <div className="relative flex items-center">
            <Link
              href={item.url}
              className="flex h-8 min-w-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <div className="flex flex-1 overflow-hidden">
                <div className="line-clamp-1 pr-6">{item.title}</div>
              </div>
            </Link>
            {item.items && (
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="absolute right-1 h-6 w-6 rounded-md p-0 ring-ring transition-all focus-visible:ring-2 data-[state=open]:rotate-90"
                >
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            )}
          </div>

          <CollapsibleContent className="px-4 py-0.5">
            <ul className="grid border-l px-2">
              {item.items?.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    href={subItem.url}
                    className="flex h-8 min-w-8 items-center gap-2 overflow-hidden rounded-md px-2 text-sm font-medium text-muted-foreground ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
                    {...(subItem.isExternal
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <div className="line-clamp-1">{subItem.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </li>
      </Collapsible>
    ))}
  </ul>
)

interface NavMainProps extends React.ComponentProps<'ul'> {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
      isExternal?: boolean
    }[]
  }[]
}
