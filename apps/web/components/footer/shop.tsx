import Image from 'next/image'
import Link from 'next/link'

export const Shop: React.FC = () => (
  <div>
    <Link href="/home" className="mb-4 flex items-center gap-2">
      <div className="rounded-lg border border-primary/60 p-1">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={24}
          height={24}
          className="object-cover dark:invert"
        />
      </div>
      <h2 className="text-lg font-bold">Yuki</h2>
    </Link>

    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.title}>
          <Link href={link.url} className="transition-colors hover:text-muted-foreground">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const links = [
  { title: 'New Arrivals', url: '/' },
  { title: 'Best Sellers', url: '/' },
  { title: 'Sale', url: '/' },
  { title: 'Collections', url: '/' },
]
