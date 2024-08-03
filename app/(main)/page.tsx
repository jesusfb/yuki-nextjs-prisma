import type { NextPage } from 'next'
import { Suspense } from 'react'

import {
  ThreeProductGrid,
  ThreeProductGridSkeleton,
} from '@/components/home-page/three-product-grid'
import { CategoryList, CategoryListSkeleton } from '@/components/home-page/category-list'
import { CarouselProduct, CarouselProductSkeleton } from '@/components/home-page/carousel-product'

const Page: NextPage = async () => (
  <>
    <Suspense fallback={<ThreeProductGridSkeleton />}>
      <ThreeProductGrid />
    </Suspense>

    <Suspense fallback={<CarouselProductSkeleton />}>
      <CarouselProduct />
    </Suspense>

    <Suspense fallback={<CategoryListSkeleton />}>
      <CategoryList />
    </Suspense>
  </>
)

export default Page
