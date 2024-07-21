import type { NextPage } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { auth } from '@/server/auth'
import { api } from '@/lib/trpc/server'

const Page: NextPage = async () => {
  const { user } = await auth()
  if (!user)
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4">
        <p className="text-lg font-medium">Unauthorized access. Please sign in.</p>
        <Button asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
    )

  const action = async () => {
    'use server'
    await api.auth.signOut()
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4">
      <p className="text-lg font-medium">Welcome, {user.name}!</p>
      <form action={action}>
        <Button>Log out</Button>
      </form>
    </div>
  )
}

export default Page
