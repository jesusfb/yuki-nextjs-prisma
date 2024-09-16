import type { NextPage } from 'next'
import { Suspense } from 'react'

import { ProductsMarquee, ProductsMarqueeSkeleton } from './_components/home/products-marquee'
import {
  ThreeGridProducts,
  ThreeGridProductsSkeleton,
} from './_components/home/three-grid-products'

const Page: NextPage = () => (
  <>
    <Suspense fallback={<ThreeGridProductsSkeleton />}>
      <ThreeGridProducts />
    </Suspense>

    <Suspense fallback={<ProductsMarqueeSkeleton />}>
      <ProductsMarquee />
    </Suspense>
  </>
)

export default Page
