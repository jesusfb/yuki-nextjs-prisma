import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/lib/site'

export const Footer: React.FC = () => (
  <footer className="bg-muted py-12">
    <div className="container grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="flex flex-col items-start gap-4">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src="/logo.svg" alt="Logo" width={24} height={24} className="dark:invert" />
          <span className="text-lg font-semibold">{siteConfig.meta.applicationName}</span>
        </Link>

        <p className="text-muted-foreground">
          Discover the best products for your home and lifestyle.
        </p>
        <div className="flex gap-4">
          {siteConfig.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>
      </div>

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

      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">Contact</h3>
        <p className="text-muted-foreground">
          {siteConfig.meta.applicationName}
          <br />
          123 Main St.
          <br />
          Anytown, USA 12345
          <br />
          (555) 555-5555
        </p>
      </div>
    </div>

    <div className="container mt-12 max-w-7xl border-t pt-6 text-sm text-muted-foreground">
      <p>
        &copy; {new Date().getFullYear()} {siteConfig.meta.applicationName}. All rights reserved.
      </p>
    </div>
  </footer>
)
