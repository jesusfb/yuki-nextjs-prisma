import Link from 'next/link'

const navs = [
  { label: 'Home', url: '/' },
  { label: 'Shop', url: '/shop' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
  { label: 'Policy', url: '/policy' },
]

export const Navigations: React.FC = () => (
  <div className="grid gap-2">
    <h3 className="text-lg font-semibold">Navigation</h3>

    <nav className="grid gap-1">
      {navs.map((nav) => (
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
