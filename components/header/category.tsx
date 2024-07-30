import { api } from '@/lib/trpc/server'
import Link from 'next/link'

export const Category: React.FC = async () => {
  const categories = await api.category.getLatestCategories()

  return (
    <nav className="hidden gap-2 md:flex">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/shop?category=${category.name}`}
          className="hover:text-muted-foreground"
        >
          {category.name}
        </Link>
      ))}
    </nav>
  )
}
