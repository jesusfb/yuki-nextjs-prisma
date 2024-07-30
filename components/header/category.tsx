'use client'

import Link from 'next/link'

import { api } from '@/lib/trpc/react'

export const Category: React.FC = () => {
  const { data: categories, isLoading } = api.category.getLatestCategories.useQuery()

  if (isLoading || !categories) return null

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
