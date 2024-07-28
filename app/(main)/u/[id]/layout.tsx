import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { getBaseUrl } from '@/lib/site'
import { api } from '@/lib/trpc/server'

interface Props {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const user = await api.user.getUser({ id: params.id })
  if (!user) return notFound()

  const previousImages = (await parent).openGraph?.images ?? []
  const description = `User profile for ${user.name} (${user.email})`
  const image = `/og?title=${user.name}&desc=${description}&image=${user.image ?? `${getBaseUrl()}/default.jpg`}`

  return {
    title: user.name,
    description,
    openGraph: { images: [image, ...previousImages], url: `${getBaseUrl()}/u/${user.id}` },
    alternates: { canonical: `${getBaseUrl()}/u/${user.id}` },
  }
}

const UserLayout: React.FC<React.PropsWithChildren> = ({ children }) => children

export default UserLayout
