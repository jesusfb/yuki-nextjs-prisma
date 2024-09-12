import Link from 'next/link'

interface Props {
  title: string
  links: { title: string; url: string }[]
}

export const Links: React.FC<Props> = ({ title, links }) => (
  <div>
    <h2 className="mb-4 text-lg font-semibold text-foreground">{title}</h2>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.title}>
          <Link
            href={link.url}
            className="transition-colors hover:text-muted-foreground"
            {...(link.url.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)
