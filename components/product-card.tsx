import Image from 'next/image'
import Link from 'next/link'

import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
    href={`/p/${createSlug({ str: product.name, suffix: product.id })}`}
    className={cn(
      'group aspect-square rounded-lg border transition-colors ease-linear hover:border-primary/60',
      className,
    )}
  >
    <Image
      src={product.image}
      alt={product.name}
      className={`rounded-lg object-cover ${product.image === '/logo.svg' ? 'dark:invert' : ''}`}
      fill
    />

    <CardHeader className="absolute inset-x-0 bottom-0 rounded-b-lg bg-card p-4">
      <CardTitle>{product.name}</CardTitle>
      <CardDescription>${product.price}</CardDescription>
    </CardHeader>
  </Link>
)
