import Image from 'next/image'
import Link from 'next/link'

export const Shop: React.FC = () => (
  <div className="space-y-4">
    <Link href="/" className="flex items-center gap-2">
      <div className="rounded-lg border border-primary p-1">
        <Image
          src="/assets/logo.svg"
          alt="Yuki"
          width={24}
          height={24}
          className="object-cover dark:invert"
        />
      </div>
      <h3 className="text-lg font-semibold text-foreground">Yuki</h3>
    </Link>
    <ul className="space-y-2">
      {links.map(({ title, href }) => (
        <li key={title}>
          <Link href={href} className="transition-colors hover:text-foreground">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const links = [
  { title: 'All Products', href: '/' },
  { title: 'Featured', href: '/' },
  { title: 'New Arrivals', href: '/' },
  { title: 'Sale', href: '/' },
]
