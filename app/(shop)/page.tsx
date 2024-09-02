import type { NextPage } from 'next'
import { Suspense } from 'react'

import { CarouselProduct, CarouselProductSkeleton } from '@/components/home-page/carousel-product'
import { CategoryList, CategoryListSkeleton } from '@/components/home-page/category-list'
import {
  ThreeProductGrid,
  ThreeProductGridSkeleton,
} from '@/components/home-page/three-product-grid'

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
