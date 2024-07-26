'use client'

import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useSession } from '@/lib/session'

export const Auth: React.FC = () => {
  const { isLoading, isAuth, user } = useSession()

  if (isLoading) return <Loader2Icon className="size-7 animate-spin" />

  if (!isAuth)
    return (
      <div className="flex items-center gap-2 text-sm">
        <Link href="/sign-up" className="hover:text-muted-foreground">
          Sign up
        </Link>
        |
        <Link href="/sign-in" className="hover:text-muted-foreground">
          Sign in
        </Link>
      </div>
    )

  return (
    <Link href={`/u/${user.id}`} className="group">
      <Image
        src={user.image ?? '/default.jpg'}
        alt={user.name}
        width={28}
        height={28}
        className={`aspect-square rounded-full object-cover ring-2 ring-transparent hover:ring-ring ${user.image ? '' : 'dark:invert'}`}
      />

      <p className="absolute right-0 mt-4 hidden whitespace-nowrap rounded bg-muted px-2 py-1 text-center shadow-lg group-hover:block">
        {user.name}
      </p>
    </Link>
  )
}
