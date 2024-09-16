import { ProductCard } from '@/components/product-card'
import { Marquee } from '@/components/ui/marquee'
import { Skeleton } from '@/components/ui/skeleton'

import { api } from '@/lib/trpc/server'

export const ProductsMarquee: React.FC = async () => {
  const products = await api.product.getAll({ limit: 13 }).then((res) => res.slice(2, 13))

  return (
    <Marquee>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} className="w-80" />
      ))}
    </Marquee>
  )
}

export const ProductsMarqueeSkeleton: React.FC = () => (
  <Marquee>
    {Array.from({ length: 10 }).map((_, i) => (
      <Skeleton key={i} className="w-80 aspect-square" />
    ))}
  </Marquee>
)
