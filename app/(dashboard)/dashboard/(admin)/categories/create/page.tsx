import type { NextPage } from 'next'

import { CardDescription, CardTitle } from '@/components/ui/card'
import { CreateCategoryForm } from '@/app/(dashboard)/_components/admin/category/create-form'

const Page: NextPage = () => (
  <>
    <CardTitle>Create new category</CardTitle>
    <CardDescription>Fill out the form below to create a new category.</CardDescription>

    <CreateCategoryForm />
  </>
)

export default Page
