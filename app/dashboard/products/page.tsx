import type { NextPage } from 'next'
import Link from 'next/link'

import { Search } from '@/components/search'
import { api, HydrateClient } from '@/lib/trpc/server'
import { List } from '../_components/product/list'

interface Props {
  searchParams: { q?: string }
}

const Page: NextPage<Props> = async ({ searchParams }) => {
  void api.product.getAdminProducts.prefetch({ q: searchParams.q })

  return (
    <HydrateClient>
      <section className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Products</h1>

        <Link
          href="/dashboard/products/create"
          className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
        >
          New Product
        </Link>
      </section>

      <Search type="products" placeholder="Search products..." className="my-4 w-1/2" isAdmin />

      <List q={searchParams.q} />
    </HydrateClient>
  )
}

export default Page
