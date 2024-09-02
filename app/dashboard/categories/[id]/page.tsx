import type { NextPage } from 'next'

import { api } from '@/lib/trpc/server'
import { UpdateForm } from '../../_components/category/update-form'

interface Props {
  params: { id: string }
}

const Page: NextPage<Props> = async ({ params }) => {
  const category = await api.category.getCategory({ id: params.id })

  return <UpdateForm category={category} />
}

export default Page
