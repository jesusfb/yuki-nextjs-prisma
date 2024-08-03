import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Search } from '@/components/search'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { api } from '@/lib/trpc/server'
import { createSlug } from '@/lib/utils'

export const MobileNav = async () => {
  const categories = await api.category.getCategories({})

  return (
    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col gap-4" side="left">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center gap-2">
            <Image
              src="/logo.svg"
              alt="logo"
              width={28}
              height={28}
              className="aspect-square dark:invert"
            />

            <span className="text-2xl font-bold">Yuki</span>
          </SheetTitle>

          <Search className="mt-4" />
        </SheetHeader>

        <nav className="flex flex-1 flex-col">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${createSlug({ str: category.name, id: category.id })}`}
              className="rounded-lg px-4 py-2 hover:bg-accent hover:text-accent-foreground"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
