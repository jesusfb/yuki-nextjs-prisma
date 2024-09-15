import type { NextPage } from 'next'

import { CardDescription, CardTitle } from '@/components/ui/card'
import { CreateProductForm } from '@/app/(dashboard)/_components/admin/product/create-form'

import { api } from '@/lib/trpc/server'

const Page: NextPage = async () => {
  const categories = await api.category.getAll({ noLimit: true })

  return (
    <>
      <CardTitle>Create Product</CardTitle>
      <CardDescription>Fill out the form to create a new product</CardDescription>

      <CreateProductForm categories={categories} />
    </>
  )
}

export default Page
