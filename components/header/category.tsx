import Link from 'next/link'

export const Category: React.FC = () => {
  const mock = ['Laptop', 'Book', 'Smartphone']

  return (
    <nav className="hidden gap-2 md:flex">
      {mock.map((category, index) => (
        <Link key={index} href="#" className="hover:text-muted-foreground">
          {category}
        </Link>
      ))}
    </nav>
  )
}
