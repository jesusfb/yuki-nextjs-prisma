import Image from 'next/image'

import { CardDescription, CardTitle } from '@/components/ui/card'

interface Props {
  user: {
    name: string
    email: string
    role: string
    createdAt: string
    image: string | null
    numProducts: number
    following: number
    followers: number
  }
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <Image
      src={user.image ?? '/default.jpg'}
      width={200}
      height={200}
      alt={user.name}
      className={`rounded-md shadow-lg ${user.image ? '' : 'dark:invert'}`}
    />
    <article className="flex flex-col gap-2 md:col-span-3">
      <div className="flex items-center gap-4">
        <CardDescription className="rounded bg-background px-2 py-1 text-foreground shadow-md">
          {user.role}
        </CardDescription>
        <CardTitle>{user.name}</CardTitle>
      </div>

      <CardDescription>{user.email}</CardDescription>
      <CardDescription>Joined: {user.createdAt}</CardDescription>
    </article>
    <article className="col-span-1 flex flex-col gap-2 md:col-span-2">
      <CardDescription>Number of products: {user.numProducts}</CardDescription>
      <CardDescription>Following: {user.following}</CardDescription>
      <CardDescription>Followers: {user.followers}</CardDescription>
    </article>
  </>
)
