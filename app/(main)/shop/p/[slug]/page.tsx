import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ProductCard } from '@/components/product-card'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { Marquee } from '@/components/ui/marquee'
import { api } from '@/lib/trpc/server'
import { createSlug, getIdFromSlug } from '@/lib/utils'
import { getBaseUrl } from '@/lib/site'

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

        <div className="space-y-4">
          <CardTitle className="text-4xl">{product.name}</CardTitle>

          <p className="w-fit rounded-full bg-primary px-3 py-1 text-lg text-primary-foreground">
            $ {product.price}
          </p>

          <CardDescription className="text-lg">
            <b className="text-foreground">Category:</b>{' '}
            <Link
              className="hover:text-foreground hover:underline"
              href={`/shop/c/${createSlug({ str: product.category.name, suffix: product.category.id })}`}
            >
              {product.category.name}
            </Link>
          </CardDescription>

          <CardDescription className="text-lg">
            <b className="text-foreground">
              Description: <br />
            </b>

            <span
              dangerouslySetInnerHTML={{ __html: product.description.replace(/\\n/g, '<br />') }}
            />
          </CardDescription>

          <CardDescription className="text-lg">
            <b className="text-foreground">Stock:</b> {product.stock}
          </CardDescription>
        </div>
      </section>

      <Link
        href={`/u/${createSlug({ str: product.createdBy.name, suffix: product.createdBy.id })}`}
        className="mt-4 flex w-full items-center gap-4 rounded-lg border p-4 shadow-lg"
      >
        <Image
          src={product.createdBy.image}
          alt={product.createdBy.name}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />

        <div className="flex flex-col gap-2">
          <CardTitle>{product.createdBy.name}</CardTitle>
          <CardDescription>{product.createdBy._count.products} products</CardDescription>
        </div>

        <div className="flex flex-col gap-2">
          <CardDescription>{product.createdBy._count.followers} followers</CardDescription>
          <CardDescription>{product.createdBy._count.following} following</CardDescription>
        </div>
      </Link>

      <section className="mt-8">
        <h2 className="text-3xl font-bold">Related Products</h2>

        {product.relatedProducts ? (
          <Marquee>
            {product.relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} className="size-80" />
            ))}
          </Marquee>
        ) : (
          <CardDescription className="text-lg">No related products found :((</CardDescription>
        )}
      </section>
    </>
  )
}

export default Page
