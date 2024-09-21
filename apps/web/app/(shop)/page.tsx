import type { NextPage } from 'next'
import { Suspense } from 'react'

import { ProductMarquee, ProductMarqueeSkeleton } from './_components/home/product-marquee'
import {
  ThreeGridProducts,
  ThreeGridProductsSkeleton,
} from './_components/home/three-grid-products'

const Page: NextPage = () => (
  <>
    <Suspense fallback={<ThreeGridProductsSkeleton />}>
      <ThreeGridProducts />
    </Suspense>

    <Suspense fallback={<ProductMarqueeSkeleton />}>
      <ProductMarquee />
    </Suspense>
  </>
)

export default Page
