import type { NextPage } from 'next'

import { api } from '@/lib/trpc/server'
import { CategoryCard } from '@/components/category-card'
import { Search } from '@/components/search'

interface Props {
  searchParams: { q?: string }
}

const Page: NextPage<Props> = async ({ searchParams }) => {
  const categories = await api.category.getCategories({ q: searchParams.q })

  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <Search className="col-span-2" type="categories" placeholder="Search categories..." />
      <div className="hidden md:col-span-2 md:block" />

      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </section>
  )
}

export default Page
