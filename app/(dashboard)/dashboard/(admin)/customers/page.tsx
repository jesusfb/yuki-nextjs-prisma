import type { NextPage } from 'next'

import { CustomersList } from '@/app/(dashboard)/_components/admin/customer/list'

import type { Query } from '@/server/api/validators/utils'
import { api, HydrateClient } from '@/lib/trpc/server'

const Page: NextPage<Query> = async (props) => {
  void api.user.getAll.prefetch(props)

  return (
    <HydrateClient>
      <CustomersList {...props} />
    </HydrateClient>
  )
}

export default Page
