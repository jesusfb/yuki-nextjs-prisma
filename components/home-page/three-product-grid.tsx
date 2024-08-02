import { api } from '@/lib/trpc/server'
import { ProductCard } from '../product-card'
import { Skeleton } from '../ui/skeleton'

export const ThreeProductGrid: React.FC = async () => {
  const threeLastProducts = await api.product.getProducts({}).then((res) => res.slice(0, 3))

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {threeLastProducts.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          className={idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}
        />
      ))}
    </section>
  )
}

export const ThreeProductGridSkeleton: React.FC = () => (
  <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
    {Array.from({ length: 3 }).map((_, idx) => (
      <Skeleton
        key={idx}
        className={`aspect-square w-full ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
      />
    ))}
  </section>
)
