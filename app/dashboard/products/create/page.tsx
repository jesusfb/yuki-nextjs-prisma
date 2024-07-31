import { api } from '@/lib/trpc/server'
import type { NextPage } from 'next'
import { Form } from './_form'

const Page: NextPage = async () => {
  const categories = await api.category
    .getCategories()

  return <Form categories={categories} />
}

export default Page
