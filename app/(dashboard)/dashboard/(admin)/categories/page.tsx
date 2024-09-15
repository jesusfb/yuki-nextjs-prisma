import type { NextPage } from 'next'

import { CategoryList } from '@/app/(dashboard)/_components/admin/category/list'

import type { Query } from '@/server/api/validators/utils'
import { api, HydrateClient } from '@/lib/trpc/server'

const Page: NextPage<Query> = async (props) => {
  void api.category.getAll.prefetch(props)

  return (
    <HydrateClient>
      <CategoryList {...props} />
    </HydrateClient>
  )
}

export default Page
