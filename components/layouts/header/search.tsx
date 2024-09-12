import { SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export const Search: React.FC<{ className?: string }> = ({ className }) => (
  <form className={cn('flex gap-1', className)} action="/search">
    <Input name="q" placeholder="Search..." />
    <Button variant="outline" size="icon" className="md:hidden">
      <SearchIcon size={16} />
    </Button>
  </form>
)
