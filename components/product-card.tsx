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

    <div className="absolute bottom-6 left-6 flex w-fit items-center justify-between gap-8 rounded-full bg-primary/60 text-primary-foreground shadow-lg backdrop-blur-xl transition-colors ease-linear group-hover:bg-primary/90">
      <CardTitle className="px-4 py-2">{product.name}</CardTitle>
      <CardDescription className="rounded-full bg-secondary/60 px-4 py-3 text-secondary-foreground transition-colors ease-linear group-hover:bg-secondary">
        ${product.price}
      </CardDescription>
    </div>
  </Link>
)
