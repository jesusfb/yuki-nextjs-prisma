import Link from 'next/link'
import Image from 'next/image'

import { cn, createSlug } from '@/lib/utils'

interface CategoryCardProps {
  category: {
    id: string
    name: string
    image: string
  }
  className?: string
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, className }) => (
  <Link
    href={`/shop/c/${createSlug({ str: category.name, suffix: category.id })}`}
    className={cn('group aspect-square rounded-lg border', className)}
  >
    <Image
      src={category.image}
      alt={category.name}
      className={`rounded-lg object-cover ${category.image === '/logo.svg' ? 'dark:invert' : ''}`}
      fill
    />
    <p className="absolute bottom-0 left-0 w-full rounded-b-lg bg-secondary py-2 text-center text-lg font-medium backdrop-blur-xl transition-colors ease-linear group-hover:bg-secondary/60">
      {category.name}
    </p>
  </Link>
)
