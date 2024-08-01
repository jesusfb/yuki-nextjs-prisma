import type { NextPage } from 'next'
import Link from 'next/link'

import { List } from './_list'

const Page: NextPage = () => {
  return (
    <>
      <section className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Products</h1>

        <Link href="/dashboard/products/create" className="hover:underline">
          New Product
        </Link>
      </section>

      <List />
    </>
  )
}

export default Page
