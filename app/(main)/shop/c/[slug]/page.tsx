import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { ProductCard } from '@/components/product-card'
import { SideMenu } from '@/components/side-menu'
import { seo } from '@/lib/seo'
import { api } from '@/lib/trpc/server'
import { getIdFromSlug } from '@/lib/utils'

interface Props {
  params: { slug: string }
  searchParams: { q?: string; sortBy?: 'name' | 'price' | 'createdAt'; orderBy?: 'asc' | 'desc' }
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const id = getIdFromSlug(params.slug) ?? ''
  const category = await api.category.getCategory({ id })
  if (!category) notFound()

  const previousImages = (await parent).openGraph?.images ?? []
  const description = `Discover the best ${category.name} products on our store.`

  return seo({
    title: category.name,
    description,
    images: [
      `/api/og?title=${category.name}&desc=${description}&image=${category.image}`,
      ...previousImages,
    ],
    url: `/c/${params.slug}`,
  })
}

const Page: NextPage<Props> = async ({ params, searchParams }) => {
  const products = await api.product.getProducts({
    q: searchParams.q,
    category: getIdFromSlug(params.slug),
    sortBy: searchParams.sortBy ?? 'createdAt',
    orderBy: searchParams.orderBy ?? 'desc',
  })

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
      <SideMenu
        slug={params.slug}
        query={{
          sortBy: searchParams.sortBy ?? 'createdAt',
          orderBy: searchParams.orderBy ?? 'desc',
        }}
      />

      <section className="grid grid-cols-2 gap-4 md:col-span-5 md:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  )
}

export default Page
