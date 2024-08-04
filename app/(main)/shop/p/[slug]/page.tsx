import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { getBaseUrl } from '@/lib/site'
import { api } from '@/lib/trpc/server'
import { getIdFromSlug } from '@/lib/utils'
import { Info } from './_info'
import { RelatedProducts } from './_related-products'
import { ShopCard } from './_shop-card'

interface Props {
  params: { slug: string }
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const id = getIdFromSlug(params.slug) ?? ''
  const product = await api.product.getProduct({ id })
  if (!product) notFound()

  const baseDesc = product.description.replace(/\\n/g, ' ')
  const previousImages = (await parent).openGraph?.images ?? []
  const imgDesc = baseDesc.length > 100 ? baseDesc.slice(0, 100) + '...' : baseDesc

  return {
    title: product.name,
    description: baseDesc,
    openGraph: {
      images: [
        `/og?title=${product.name}&desc=${imgDesc}&image=${product.image}`,
        ...previousImages,
      ],
      url: `${getBaseUrl()}/p/${params.slug}`,
    },
    alternates: { canonical: `${getBaseUrl()}/p/${params.slug}` },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const id = getIdFromSlug(params.slug) ?? ''
  const product = await api.product.getProduct({ id })
  if (!product) notFound()

  return (
    <>
      <section className="grid grid-cols-1 gap-4 rounded-lg border p-4 md:grid-cols-3">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className={`aspect-square w-full rounded-lg object-cover drop-shadow-lg md:col-span-2 ${product.image === '/logo.svg' && 'dark:invert'}`}
        />

        <Info product={product} />
      </section>

      <ShopCard shop={product.createdBy} />

      <RelatedProducts products={product.relatedProducts} />
    </>
  )
}

export default Page
