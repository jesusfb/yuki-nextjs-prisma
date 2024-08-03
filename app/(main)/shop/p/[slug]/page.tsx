import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { api } from '@/lib/trpc/server'
import { createSlug, getIdFromSlug } from '@/lib/utils'
import Image from 'next/image'
import { CardDescription, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Marquee } from '@/components/ui/marquee'
import { ProductCard } from '@/components/product-card'

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

  const previousImages = (await parent).openGraph?.images ?? []

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [
        `/og?title=${product.name}&desc=${product.description}&image=${product.image}`,
        ...previousImages,
      ],
    },
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
              href={`/shop/category/${createSlug({ str: product.category.name, suffix: product.category.id })}`}
            >
              {product.category.name}
            </Link>
          </CardDescription>

          <CardDescription className="text-lg">
            <b className="text-foreground">
              Description: <br />
            </b>
            {product.description}
          </CardDescription>

          <CardDescription className="text-lg">
            <b className="text-foreground">Stock:</b> {product.stock}
          </CardDescription>
        </div>
      </section>

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
