import type { NextPage } from 'next'

import { Form } from './_form'
import { api } from '@/lib/trpc/server'

interface Props {
  params: { id: string }
}

const Page: NextPage<Props> = async ({ params }) => {
  const category = await api.category.getCategory({ id: params.id })

  return <Form category={category} />
}

export default Page
