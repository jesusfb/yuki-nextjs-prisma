import type { NextPage } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { ProductCard } from '@/components/product-card'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { api } from '@/lib/trpc/server'
import { getIdFromSlug } from '@/lib/utils'
import { auth } from '@/server/auth'
import { ActionBtn, FollowBtn } from '../_components/profile-btn'

interface Props {
  params: { slug: string }
}

const Page: NextPage<Props> = async ({ params: { slug } }) => {
  const id = getIdFromSlug(slug) ?? ''
  const user = await api.user.getUser({ id })
  if (!user) notFound()

  const { user: authUser } = await auth()
  const isSelf = authUser ? authUser.id === user.id : false

  return (
    <>
      <section className="grid grid-cols-2 gap-4 rounded-lg bg-secondary p-4 text-secondary-foreground shadow-lg md:grid-cols-6">
        <Image
          src={user.image ?? '/default.jpg'}
          width={200}
          height={200}
          alt={user.name}
          className={`row-span-2 aspect-square w-full rounded-md object-cover shadow-lg ${user.image ? '' : 'dark:invert'}`}
        />

        <article className="flex flex-col gap-2 md:col-span-3">
          <div className="flex items-center gap-4">
            <CardDescription className="rounded border border-ring bg-background px-2 py-1 text-foreground">
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

        {Boolean(authUser) &&
          (isSelf ? (
            <ActionBtn slug={slug} />
          ) : (
            <FollowBtn userID={user.id} isFollowed={user.isFollowed} />
          ))}
      </section>

      <hr className="my-4" />

      {user.role === 'ADMIN' && (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <CardTitle className="col-span-2 md:col-span-4">{user.name}&apos;s Products</CardTitle>

          {user.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </>
  )
}

export default Page
