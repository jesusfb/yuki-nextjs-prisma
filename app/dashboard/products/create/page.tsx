import type { NextPage } from 'next'

import { api } from '@/lib/trpc/server'
import { CreateForm } from '../../_components/product/create-form'

const Page: NextPage = async () => {
  const categories = await api.category.getCategories({})

  return <CreateForm categories={categories} />
}

export default Page
