import { SearchIcon } from 'lucide-react'
import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export const Search: React.FC<{ className?: string }> = ({ className }) => {
  const search = async (formData: FormData) => {
    'use server'
    const search = String(formData.get('search'))
    if (!search) return
    redirect(`/search?q=${search}`)
  }

  return (
    <form className={cn('flex gap-1', className)} action={search}>
      <Input name="search" placeholder="Search..." />
      <Button variant="outline" size="icon" className="md:hidden">
        <SearchIcon size={16} />
      </Button>
    </form>
  )
}
