import Link from 'next/link'

import { api } from '@/lib/trpc/server'

export const Category: React.FC = async () => {
  const categories = await api.category.getCategories({}).then((res) => res.slice(0, 2))

  return (
    <nav className="hidden gap-2 md:flex">
      <Link href="/categories" className="hover:text-muted-foreground">
        All
      </Link>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.name}`}
          className="hover:text-muted-foreground"
        >
          {category.name}
        </Link>
      ))}
    </nav>
  )
}
