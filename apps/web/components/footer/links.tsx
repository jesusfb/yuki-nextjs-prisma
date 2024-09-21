import Link from 'next/link'

import type { LucideIcon } from '@yuki/ui/icons'

interface Props {
  title: React.ReactNode
  links: { title: string; href: string }[]
}

export const Links: React.FC<Props> = ({ title, links }) => (
  <div className="space-y-4">
    {title}
    <ul className="space-y-2">
      {links.map(({ title, href }) => (
        <li key={title}>
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

interface SocialProps {
  title: string
  url: string
  icon: LucideIcon
}

export const SocialLinks: React.FC<SocialProps> = ({ url, title, icon: Icon }) => (
  <a
    key={url}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground transition-colors hover:text-foreground"
  >
    <Icon size={24} />
    <span className="sr-only">{title}</span>
  </a>
)
