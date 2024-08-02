import type { NextPage } from 'next'
import { Suspense } from 'react'

import {
  ThreeProductGrid,
  ThreeProductGridSkeleton,
} from '@/components/home-page/three-product-grid'

const Page: NextPage = async () => {
  return (
    <>
      <Suspense fallback={<ThreeProductGridSkeleton />}>
        <ThreeProductGrid />
      </Suspense>
    </>
  )
}

export default Page
