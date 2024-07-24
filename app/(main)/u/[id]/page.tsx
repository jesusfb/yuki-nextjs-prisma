import type { NextPage } from 'next'

import { api } from '@/lib/trpc/server'
import { auth } from '@/server/auth'

interface Props {
  params: { id: string }
}

const Page: NextPage<Props> = async ({ params: { id } }) => {
  const user = await api.user.getUser({ id })
  const { user: authUser } = await auth()

  const isSelf = authUser ? authUser.id === user.id : false

  return <></>
}

export default Page
