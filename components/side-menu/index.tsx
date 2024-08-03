import { api } from '@/lib/trpc/server'
import { SideMenuContent } from './content'
import { MobileDrawer } from './mobile'

interface Props {
  slug?: string
  query?: Record<string, string>
}

export const SideMenu: React.FC<Props> = async ({ slug, query }) => {
  const categories = await api.category.getCategories({})

  return (
    <>
      <aside className="col-span-1 hidden flex-col gap-4 md:flex">
        <SideMenuContent query={query} slug={slug} categories={categories} />
      </aside>

      <MobileDrawer>
        <SideMenuContent query={query} slug={slug} categories={categories} />
      </MobileDrawer>
    </>
  )
}
