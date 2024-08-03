import { api } from '@/lib/trpc/server'

import { ProductCard } from '@/components/product-card'
import { Marquee } from '@/components/ui/marquee'
import { Skeleton } from '@/components/ui/skeleton'

export const CarouselProduct: React.FC = async () => {
  const products = await api.product.getProducts({}).then((res) => res.slice(3, 14))

  return (
    <Marquee>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} className="size-80" />
      ))}
    </Marquee>
  )
}

export const CarouselProductSkeleton: React.FC = () => (
  <Marquee>
    {Array.from({ length: 10 }).map((_, idx) => (
      <Skeleton key={idx} className="size-80" />
    ))}
  </Marquee>
)
