import type { NextPage } from 'next'

import { CustomersList } from '@/app/(dashboard)/_components/admin/customer/list'

import type { Query } from '@/server/api/validators/utils'
import { api } from '@/lib/trpc/server'

const Page: NextPage<{ searchParams: Query }> = async ({ searchParams }) => {
  const customers = await api.user.getAll(searchParams)

  return <CustomersList customers={customers} />
}

export default Page
