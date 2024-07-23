'use client'

import type { NextPage } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { useSession } from '@/lib/session'
import { api } from '@/lib/trpc/react'

const Page: NextPage = () => {
  const { isAuth, user, isLoading, refresh } = useSession()

  const { mutate } = api.auth.signOut.useMutation({ onSuccess: () => refresh() })

  if (isLoading)
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-8">Loading...</div>
    )

  if (!isAuth)
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-8">
        <p className="text-2xl">Not authenticated</p>

        <Button asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
    )

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-8">
      <pre>{JSON.stringify({ ...user, image: undefined }, null, 2)}</pre>
      <Button onClick={() => mutate()}>log out</Button>
    </div>
  )
}

export default Page
