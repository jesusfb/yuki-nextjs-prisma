import type { NextPage } from 'next'

import * as card from '@/components/ui/card'
import { CreateCategoryForm } from '@/app/(dashboard)/_components/admin/category/create-form'

const Page: NextPage = () => (
  <>
    <card.CardTitle>Create new category</card.CardTitle>
    <card.CardDescription>Fill out the form below to create a new category.</card.CardDescription>

    <CreateCategoryForm />
  </>
)

export default Page
