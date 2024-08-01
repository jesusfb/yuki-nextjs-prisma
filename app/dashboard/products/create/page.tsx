import type { NextPage } from 'next'

import { api } from '@/lib/trpc/server'
import { Form } from './_form'

const Page: NextPage = async () => {
  const categories = await api.category.getCategories()

  return <Form categories={categories} />
}

export default Page
