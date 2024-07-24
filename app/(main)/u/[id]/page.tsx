import type { NextPage } from 'next'
import Image from 'next/image'

import { CardDescription, CardTitle } from '@/components/ui/card'
import { api } from '@/lib/trpc/server'
import { auth } from '@/server/auth'
import { Buttons } from './_buttons'

interface Props {
  params: { id: string }
}

const Page: NextPage<Props> = async ({ params: { id } }) => {
  const user = await api.user.getUser({ id })
  const { user: authUser } = await auth()

  const isSelf = authUser ? authUser.id === user.id : false

  return (
    <>
      <section className="grid grid-cols-2 gap-4 rounded-lg bg-secondary p-4 text-secondary-foreground md:grid-cols-6">
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

        {Boolean(authUser) && <Buttons isSelf={isSelf} userId={user.id} />}
      </section>

      <hr className="my-4" />

      <section className="grid grid-cols-1 md:grid-cols-3">
        <CardTitle className="md:col-span-3">Products</CardTitle>
        {user.products.map((product) => (
          <div key={product.id} className="flex flex-col gap-2 rounded-lg bg-secondary p-4">
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
            <CardDescription>Price: {product.price}</CardDescription>
          </div>
        ))}
      </section>
    </>
  )
}

export default Page
