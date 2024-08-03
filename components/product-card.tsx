import Link from 'next/link'
import Image from 'next/image'

import { CardDescription, CardTitle } from '@/components/ui/card'
import { cn, createSlug } from '@/lib/utils'

interface ProductCardProps {
  product: {
    id: string
    name: string
    image: string
    price: number
  }
  className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => (
  <Link
    href={`/shop/p/${createSlug({ str: product.name, suffix: product.id })}`}
    className={cn(
      'group aspect-square rounded-lg border transition-colors ease-linear hover:border-ring/80',
      className,
    )}
  >
    <Image
      src={product.image}
      alt={product.name}
      className={`rounded-lg object-cover ${product.image === '/logo.svg' ? 'dark:invert' : ''}`}
      fill
    />

    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 rounded-b-lg bg-secondary/60 px-6 py-4 backdrop-blur-xl backdrop-saturate-150 transition-colors group-hover:bg-secondary/80">
      <CardTitle>{product.name}</CardTitle>
      <CardDescription>${product.price}</CardDescription>
    </div>
  </Link>
)
