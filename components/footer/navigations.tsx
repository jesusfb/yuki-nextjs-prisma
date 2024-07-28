import Link from 'next/link'

import { siteConfig } from '@/lib/site'

export const Navigations: React.FC = () => (
  <div className="grid gap-2">
    <h3 className="text-lg font-semibold">Navigation</h3>
    <nav className="grid gap-1">
      {siteConfig.navs.map((nav) => (
        <Link
          key={nav.label}
          href={nav.url}
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          {nav.label}
        </Link>
      ))}
    </nav>
  </div>
)
