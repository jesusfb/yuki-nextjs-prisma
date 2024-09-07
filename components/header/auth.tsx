'use client'

import { ShoppingBagIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { useSession } from '@/lib/session'
import { createSlug } from '@/lib/utils'

export const Auth: React.FC = () => {
  const { user, isAuth } = useSession()

  if (!isAuth)
    return (
      <Link
        href="/sign-in"
        className="grid h-full place-items-center place-self-end hover:text-muted-foreground md:place-self-center"
      >
        Sign in
      </Link>
    )

  return (
    <div className="flex items-center gap-2 place-self-end">
      {user.role === 'ADMIN' && (
        <Link className="hidden hover:underline md:block" href="/dashboard">
          Dashboard
        </Link>
      )}

      <Link href={`/u/${createSlug({ str: user.name, suffix: user.id })}`} passHref>
        <Image
          src={user.image ?? '/default.jpg'}
          alt={user.name}
          width={28}
          height={28}
          className={`aspect-square rounded-full object-cover ring-2 ring-transparent hover:ring-ring ${user.image ? '' : 'dark:invert'}`}
        />
      </Link>

      <Link
        href={`/u/${createSlug({ str: user.name, suffix: user.id })}/cart`}
        className={buttonVariants({ variant: 'outline', size: 'icon' })}
      >
        <ShoppingBagIcon />
      </Link>
    </div>
  )
}
