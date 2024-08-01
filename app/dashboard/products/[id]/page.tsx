import type { NextPage } from 'next'

import { Form } from './_form'
import { api } from '@/lib/trpc/server'

interface Props {
  params: { id: string }
}

const Page: NextPage<Props> = async ({ params }) => {
  try {
    const product = await api.product.getProduct({ id: params.id })
    const categories = await api.category.getCategories()

    return <Form product={product} categories={categories} />
  } catch (error) {
    if (error instanceof Error) return <div>{error.message}</div>
  }
}

export default Page
