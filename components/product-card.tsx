import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import * as card from '@/components/ui/card'

import { cn, slugify } from '@/lib/utils'

interface ProductCardProps {
  product: { id: string; image: string; name: string; price: number; category: { name: string } }
  className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => (
  <card.Card className={cn('aspect-square overflow-hidden group/product', className)} asChild>
    <Link href={`/p/${slugify(product.name, product.id)}`}>
      <Image
        src={product.image}
        alt={product.name}
        className="transition-all ease-linear group-hover/product:scale-110 group-hover/product:brightness-75 hover:border-secondary object-cover"
        fill
      />

      <div className="w-full h-full flex items-end">
        <div className="bg-secondary p-4 w-full flex-col items-start flex gap-1 group-hover/product:bg-secondary/90 transition-colors ease-linear">
          <div className="flex gap-2 items-center">
            <Badge>{product.category.name}</Badge>
            <card.CardTitle>{product.name}</card.CardTitle>
          </div>
          <card.CardDescription>{product.price.toFixed(2)}</card.CardDescription>
        </div>
      </div>
    </Link>
  </card.Card>
)
