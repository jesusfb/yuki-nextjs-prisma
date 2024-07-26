import type { Metadata, NextPage, ResolvingMetadata } from 'next'

import { api } from '@/lib/trpc/server'
import { auth } from '@/server/auth'
import { Buttons } from './_buttons'
import { FollowBtn } from './_follow-btn'
import { UserInfo } from './_user-info'

interface Props {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const user = await api.user.getUser({ id: params.id })
  const previousImages = (await parent).openGraph?.images ?? []
  const description = `User profile for ${user.name} (${user.email})`
  const images = user.image
    ? `/og?title=${user.name}&desc=${description}&image=${user.image}`
    : [...previousImages]

  return {
    title: user.name,
    description,
    openGraph: { images },
  }
}

const Page: NextPage<Props> = async ({ params: { id } }) => {
  const user = await api.user.getUser({ id })
  const { user: authUser } = await auth()

  const isSelf = authUser ? authUser.id === user.id : false

  return (
    <>
      <section className="grid grid-cols-2 gap-4 rounded-lg bg-secondary p-4 text-secondary-foreground md:grid-cols-6">
        <UserInfo user={user} />

        {Boolean(authUser) &&
          (isSelf ? (
            <Buttons userId={user.id} />
          ) : (
            <FollowBtn userID={user.id} isFollowed={user.isFollowed} />
          ))}
      </section>

      <hr className="my-4" />

      <section className="grid grid-cols-1 md:grid-cols-3">
        <h3 className="text-2xl font-semibold leading-none tracking-tight md:col-span-3">
          Products
        </h3>
      </section>
    </>
  )
}

export default Page
