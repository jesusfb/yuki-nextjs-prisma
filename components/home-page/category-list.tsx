import { api } from '@/lib/trpc/server'

import { CategoryCard } from '@/components/category-card'
import { Skeleton } from '@/components/ui/skeleton'

export const CategoryList: React.FC = async () => {
  const categories = await api.category.getCategories({}).then((res) => res.slice(0, 8))

  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </section>
  )
}

export const CategoryListSkeleton: React.FC = () => (
  <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
    {Array.from({ length: 8 }).map((_, idx) => (
      <Skeleton key={idx} className="aspect-square w-full" />
    ))}
  </section>
)
