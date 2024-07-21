import type { NextPage } from 'next'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { auth } from '@/server/auth'

const Page: NextPage = async () => {
  const { user } = await auth()
  if (!user)
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4">
        <p>Unauthorized access. Please sign in.</p>
        <Link href="/sign-in" className={buttonVariants()}>
          Sign in
        </Link>
      </div>
    )

  return <div className="grid min-h-dvh place-items-center">{user.name}</div>
}

export default Page
