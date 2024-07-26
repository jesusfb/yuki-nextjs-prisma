import type { NextPage } from 'next'

import { Form } from './_form'
import { auth } from '@/server/auth'

const Page: NextPage = async () => {
  const { user } = await auth()

  return (
    <>
      <Form name={user?.name ?? ''} address={user?.address ?? ''} image={user?.image ?? ''} />
    </>
  )
}

export default Page
