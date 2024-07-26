import type { NextPage } from 'next'

import { auth } from '@/server/auth'
import { Buttons } from './_buttonts'
import { Form } from './_form'

const Page: NextPage = async () => {
  const { user } = await auth()
  if (!user) return null

  return (
    <>
      <Form name={user.name ?? ''} address={user.address ?? ''} image={user.image ?? ''} />

      <hr className="my-4" />

      <Buttons id={user.id} />
    </>
  )
}

export default Page
