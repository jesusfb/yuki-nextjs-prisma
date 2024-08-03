import type { NextPage } from 'next'

import { Search } from '@/components/search'
import { api, HydrateClient } from '@/lib/trpc/server'
import { List } from './_list'

interface Props {
  searchParams: { q?: string }
}

const Page: NextPage<Props> = async ({ searchParams }) => {
  void api.user.getUsers.prefetch({ q: searchParams.q })

  return (
    <HydrateClient>
      <section className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Customers</h1>
      </section>

      <Search type="customers" placeholder="Search users..." className="my-4 w-1/2" isAdmin />

      <List q={searchParams.q} />
    </HydrateClient>
  )
}

export default Page
