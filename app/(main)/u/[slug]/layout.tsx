import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { seo } from '@/lib/seo'
import { api } from '@/lib/trpc/server'
import { getBaseUrl, getIdFromSlug } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = getIdFromSlug(params.slug) ?? ''
  const user = await api.user.getUser({ id })
  if (!user) return notFound()

  const previousImages = (await parent).openGraph?.images ?? []
  const description = `User profile for ${user.name} (${user.email})`
  const image = `/og?title=${user.name}&desc=${description}&image=${user.image ?? `${getBaseUrl()}/default.jpg`}`

  return seo({
    title: user.name,
    description,
    images: [image, ...previousImages],
    url: `/u/${params.slug}`,
  })
}

const UserLayout: React.FC<React.PropsWithChildren> = ({ children }) => children

export default UserLayout
