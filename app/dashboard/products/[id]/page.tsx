import type { NextPage } from 'next'

import { api } from '@/lib/trpc/server'
import { UpdateForm } from '../../_components/product/update-form'

interface Props {
  params: { id: string }
}

const Page: NextPage<Props> = async ({ params }) => {
  try {
    const product = await api.product.getProduct({ id: params.id })
    const categories = await api.category.getCategories({})

    return <UpdateForm product={product} categories={categories} />
  } catch (error) {
    if (error instanceof Error) return <div>{error.message}</div>
  }
}

export default Page
