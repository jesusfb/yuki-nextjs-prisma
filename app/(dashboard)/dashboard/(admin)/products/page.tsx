import type { NextPage } from 'next'

import { ProductList } from '@/app/(dashboard)/_components/admin/product/list'

import type { Query } from '@/server/api/validators/utils'
import { api, HydrateClient } from '@/lib/trpc/server'

const Page: NextPage<Query> = async (props) => {
  void api.product.getAll.prefetch(props)

  return (
    <HydrateClient>
      <ProductList {...props} />
    </HydrateClient>
  )
}

export default Page
