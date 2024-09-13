import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { auth } from '@/server/auth'

export const User: React.FC = async () => {
  const session = await auth()
  if (!session) return <Link href="/sign-in">Login</Link>

  return (
    <Avatar className="size-8 ring-2 hover:ring-ring" asChild>
      <Link href="/dashboard">
        <AvatarImage
          src={session.user.avatar ?? session.user.discord?.avatar}
          alt={session.user.name}
        />
        <AvatarFallback>{session.user.name.slice(0, 2)}</AvatarFallback>
      </Link>
    </Avatar>
  )
}
