import type { NextPage } from 'next'

import { ProductList } from '@/app/(dashboard)/_components/admin/product/list'

import type { Query } from '@/server/api/validators/utils'
import { api } from '@/lib/trpc/server'

const Page: NextPage<{ searchParams: Query }> = async ({ searchParams }) => {
  const products = await api.product.getAll(searchParams)

  return <ProductList products={products} />
}

export default Page
