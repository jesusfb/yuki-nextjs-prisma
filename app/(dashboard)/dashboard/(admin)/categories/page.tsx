import type { NextPage } from 'next'

import { CategoryList } from '@/app/(dashboard)/_components/admin/category/list'

import type { Query } from '@/server/api/validators/utils'
import { api } from '@/lib/trpc/server'

const Page: NextPage<{ searchParams: Query }> = async ({ searchParams }) => {
  const categories = await api.category.getAll(searchParams)

  return <CategoryList categories={categories} />
}

export default Page
