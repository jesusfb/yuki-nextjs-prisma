import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/lib/site'

export const About: React.FC = () => (
  <div className="flex flex-col items-start gap-4">
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <div className="size-10 rounded-lg border border-primary/30 p-2">
        <Image src="/logo.svg" alt="Logo" width={24} height={24} className="dark:invert" />
      </div>
      <span className="text-lg font-semibold">{siteConfig.meta.applicationName}</span>
    </Link>

    <p className="text-muted-foreground">Discover the best products for your home and lifestyle.</p>
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
)
