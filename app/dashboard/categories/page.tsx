import type { NextPage } from 'next'
import { List } from './_list'
import Link from 'next/link'

const Page: NextPage = () => {
  return (
    <>
      <section className="my-4 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Categories</h1>

        <Link href="/dashboard/categories/create">New Category</Link>
      </section>

      <List />
    </>
  )
}

export default Page
