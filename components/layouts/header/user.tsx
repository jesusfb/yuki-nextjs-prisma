import Link from 'next/link'

import * as avatar from '@/components/ui/avatar'

import { auth } from '@/server/auth'

export const User: React.FC = async () => {
  const session = await auth()
  if (!session) return <Link href="/sign-in">Login</Link>

  return (
    <avatar.Avatar className="size-8 ring-2 hover:ring-ring" asChild>
      <Link href="/dashboard">
        <avatar.AvatarImage
          src={session.user.avatar ?? session.user.discord?.avatar}
          alt={session.user.name}
        />
        <avatar.AvatarFallback>{session.user.name.slice(0, 2)}</avatar.AvatarFallback>
      </Link>
    </avatar.Avatar>
  )
}
