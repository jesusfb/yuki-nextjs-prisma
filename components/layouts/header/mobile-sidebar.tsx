import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import * as sheet from '@/components/ui/sheet'

import { Brand } from './brand'
import { Category } from './category'
import { Search } from './search'

export const MobileSidebar: React.FC = () => (
  <sheet.Sheet>
    <sheet.SheetTrigger className="md:hidden" asChild>
      <Button variant="outline" size="icon">
        <MenuIcon />
      </Button>
    </sheet.SheetTrigger>

    <sheet.SheetContent side="left" className="flex flex-col gap-4">
      <sheet.SheetHeader>
        <Brand className="not-sr-only text-3xl" />
      </sheet.SheetHeader>

      <Search />

      <Category
        className="flex-1 flex-col"
        itemClassName="rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground"
      />

      <sheet.SheetFooter>
        &copy; {new Date().getFullYear()} Yuki. All rights reserved.
      </sheet.SheetFooter>
    </sheet.SheetContent>
  </sheet.Sheet>
)
