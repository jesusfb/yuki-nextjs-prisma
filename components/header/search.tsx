import { SearchIcon } from 'lucide-react'
import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Search: React.FC = () => {
  const search = async (formData: FormData) => {
    'use server'
    const query = String(formData.get('query') ?? '')
    if (!query.trim()) return
    redirect(`/shop?q=${query.trim()}`)
  }

  return (
    <form action={search} className="flex flex-1 items-center gap-2">
      <Input type="search" name="query" placeholder="What are you looking for?" />
      <Button size="icon" variant="outline" className="hidden md:flex">
        <SearchIcon />
      </Button>
    </form>
  )
}
