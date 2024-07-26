import type { NextPage } from 'next'

import { auth } from '@/server/auth'
import { Form } from './_form'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

const Page: NextPage = async () => {
  const { user } = await auth()
  if (!user) return null

  return (
    <>
      <Form user={{ name: user.name, address: user.address ?? '', image: user.image ?? '' }} />

      <hr className="my-4" />

      <div className="grid grid-cols-2 gap-4">
        <Link
          href={`/u/${user.id}/edit/change-password`}
          className={buttonVariants({ variant: 'secondary' })}
        >
          Change password
        </Link>

        <Link
          href={`/u/${user.id}/edit/delete-account`}
          className={buttonVariants({ variant: 'destructive' })}
        >
          Delete account
        </Link>
      </div>
    </>
  )
}

export default Page
