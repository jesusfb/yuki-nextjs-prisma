import { redirect } from 'next/navigation'
import { SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { cn } from '@/lib/utils'

export const Search: React.FC<{ className?: string }> = ({ className }) => {
  const action = async (formData: FormData) => {
    'use server'
    const q = formData.get('q')
    if (!q) return
    redirect(`/search?q=${String(q)}`)
  }

  return (
    <form className={cn('flex gap-1', className)} action={action}>
      <Input name="q" placeholder="Search..." />
      <Button variant="outline" size="icon" className="md:hidden">
        <SearchIcon size={16} />
      </Button>
    </form>
  )
}
