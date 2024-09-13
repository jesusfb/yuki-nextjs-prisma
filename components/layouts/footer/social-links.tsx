import { Facebook, Github, Globe, Twitter } from 'lucide-react'

export const SocialLinks: React.FC = () => (
  <div className="flex space-x-4">
    {links.map(({ href, icon: Icon, label }) => (
      <a
        key={href}
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        <Icon size={24} />
      </a>
    ))}
  </div>
)

const links = [
  {
    href: 'https://tiesen.id.vn',
    icon: Globe,
    label: 'Website',
  },
  {
    href: 'https://facebook.com/tiesen243.tsx',
    icon: Facebook,
    label: 'Facebook',
  },
  {
    href: 'https://github.com/tiesen243',
    icon: Github,
    label: 'Github',
  },
  {
    href: 'https://twitter.com/tiesen243',
    icon: Twitter,
    label: 'Twitter',
  },
]
