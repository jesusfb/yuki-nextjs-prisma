import Link from 'next/link'

import { cn } from '@/lib/utils'

const mockCategories = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' },
]

export const Category: React.FC<{ className?: string; itemClassName?: string }> = async ({
  className,
  itemClassName,
}) => {
  return (
    <ul className={cn('flex gap-2', className)}>
      {mockCategories.slice(0, 3).map((category) => (
        <li key={category.id} className={itemClassName}>
          <Link href="#">{category.name}</Link>
        </li>
      ))}
    </ul>
  )
}
