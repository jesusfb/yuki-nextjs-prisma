import { SearchIcon } from 'lucide-react'
import { redirect } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
  type?: 'shop' | 'products' | 'categories' | 'customers' | 'orders'
  placeholder?: string
  isAdmin?: boolean
}

export const Search: React.FC<Props> = ({
  className,
  type = 'shop',
  placeholder = 'What are you looking for?',
  isAdmin = false,
}) => {
  const baseUrl = `${isAdmin ? '/dashboard' : ''}/${type}`

  const search = async (formData: FormData) => {
    'use server'
    const query = String(formData.get('query') ?? '')
    if (!query.trim()) redirect(baseUrl)
    redirect(`${baseUrl}?q=${query.trim()}`)
  }

  return (
    <form action={search} className={cn('flex flex-1 items-center gap-2', className)}>
      <Input type="search" name="query" className="pr-10" placeholder={placeholder} />
      <button className="absolute right-0 top-0 inline-flex aspect-square h-full items-center justify-center text-muted-foreground hover:text-primary">
        <SearchIcon size={16} />
      </button>
    </form>
  )
}
