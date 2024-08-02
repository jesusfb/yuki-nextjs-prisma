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
    href={`/shop/${createSlug({ str: product.name, id: product.id })}`}
    className={cn(
      'group flex aspect-square flex-col rounded-lg border transition-all ease-linear hover:border-ring/80',
      className,
    )}
  >
    <Image
      src={product.image}
      alt={product.name}
      width={200}
      height={200}
      className={`absolute inset-0 h-full w-full rounded-lg object-cover ${product.image === '/logo.svg' ? 'dark:invert' : ''}`}
    />

    <div className="absolute bottom-8 left-6 flex w-fit items-center justify-between gap-8 rounded-full bg-primary/60 text-primary-foreground shadow-lg backdrop-blur-xl transition-colors ease-linear group-hover:bg-primary/90">
      <CardTitle className="px-4 py-2">{product.name}</CardTitle>
      <CardDescription className="rounded-full bg-secondary/60 px-4 py-3 text-secondary-foreground transition-colors ease-linear group-hover:bg-secondary">
        ${product.price}
      </CardDescription>
    </div>
  </Link>
)
