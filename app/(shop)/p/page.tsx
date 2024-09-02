import type { NextPage } from 'next'

import { ProductCard } from '@/components/product-card'
import { SideMenu } from '@/components/side-menu'
import { seo } from '@/lib/seo'
import { api } from '@/lib/trpc/server'

interface Props {
  searchParams: { q?: string; sortBy?: 'name' | 'price' | 'createdAt'; orderBy?: 'asc' | 'desc' }
}

export const metadata = seo({
  title: 'Shop',
  description: 'Shop for the best products',
  url: '/p',
})

const Page: NextPage<Props> = async ({ searchParams }) => {
  const products = await api.product.getProducts({
    q: searchParams.q,
    sortBy: searchParams.sortBy ?? 'createdAt',
    orderBy: searchParams.orderBy ?? 'desc',
  })

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
      <SideMenu
        query={{
          q: searchParams.q ?? '',
          sortBy: searchParams.sortBy ?? 'createdAt',
          orderBy: searchParams.orderBy ?? 'desc',
        }}
      />

      <section className="grid grid-cols-2 gap-4 md:col-span-5 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  )
}

export default Page
