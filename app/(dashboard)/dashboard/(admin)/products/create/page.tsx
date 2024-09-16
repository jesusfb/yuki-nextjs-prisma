import type { NextPage } from 'next'

import * as card from '@/components/ui/card'
import { CreateProductForm } from '@/app/(dashboard)/_components/admin/product/create-form'

import { api } from '@/lib/trpc/server'

const Page: NextPage = async () => {
  const categories = await api.category.getAll({ noLimit: true })

  return (
    <>
      <card.CardTitle>Create Product</card.CardTitle>
      <card.CardDescription>Fill out the form to create a new product</card.CardDescription>

      <CreateProductForm categories={categories} />
    </>
  )
}

export default Page
