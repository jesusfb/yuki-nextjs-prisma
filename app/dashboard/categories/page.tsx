import type { NextPage } from 'next'
import Link from 'next/link'

import { api, HydrateClient } from '@/lib/trpc/server'
import { List } from './_list'

const Page: NextPage = () => {
  void api.category.getCategories.prefetch()

  return (
    <HydrateClient>
      <section className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Categories</h1>

        <Link href="/dashboard/categories/create" className="hover:underline">
          New Category
        </Link>
      </section>

      <List />
    </HydrateClient>
  )
}

export default Page
