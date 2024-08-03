import { api } from '@/lib/trpc/server'
import { SideMenuContent } from './content'
import { FilterIcon } from 'lucide-react'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'

interface Props {
  slug?: string
  query?: { sortBy: string; orderBy: 'asc' | 'desc' }
}

export const SideMenu: React.FC<Props> = async ({ slug, query }) => {
  const categories = await api.category.getCategories({})

  return (
    <>
      <aside className="col-span-1 hidden flex-col gap-4 md:flex">
        <SideMenuContent query={query} slug={slug} categories={categories} />
      </aside>

      <Drawer>
        <DrawerTrigger className="flex items-center gap-2 text-lg font-bold">
          <FilterIcon size={20} /> Filter
        </DrawerTrigger>

        <DrawerContent>
          <section className="container py-4">
            <SideMenuContent query={query} slug={slug} categories={categories} />
          </section>
        </DrawerContent>
      </Drawer>
    </>
  )
}
