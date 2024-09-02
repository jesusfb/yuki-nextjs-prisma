import type { NextPage } from 'next'
import Link from 'next/link'

import { Search } from '@/components/search'
import { api, HydrateClient } from '@/lib/trpc/server'
import { List } from '../_components/category/list'

interface Props {
  searchParams: { q?: string }
}

const Page: NextPage<Props> = async ({ searchParams }) => {
  void api.category.getCategories.prefetch({ q: searchParams.q })

  return (
    <HydrateClient>
      <section className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Categories</h1>

        <Link
          href="/dashboard/categories/create"
          className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
        >
          New Category
        </Link>
      </section>

      <Search type="categories" placeholder="Search categories..." className="my-4 w-1/2" isAdmin />

      <List q={searchParams.q} />
    </HydrateClient>
  )
}

export default Page
