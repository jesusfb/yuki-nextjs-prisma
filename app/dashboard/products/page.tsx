import type { NextPage } from 'next'
import { redirect } from 'next/navigation'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { api, HydrateClient } from '@/lib/trpc/server'
import { List } from './_list'

interface Props {
  searchParams: { q?: string }
}

const Page: NextPage<Props> = async ({ searchParams }) => {
  void api.product.getAdminProducts.prefetch({ q: searchParams.q })

  const search = async (formData: FormData) => {
    'use server'
    const q = String(formData.get('q'))
    if (!q) return redirect('/dashboard/products')
    redirect(`/dashboard/products?q=${q}`)
  }

  const create = async () => {
    'use server'
    redirect('/dashboard/products/create')
  }

  return (
    <HydrateClient>
      <section className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Products</h1>

        <form action={create}>
          <Button size="sm">New Product</Button>
        </form>
      </section>

      <form action={search} className="my-4 flex w-1/2 items-center gap-2">
        <FormField
          name="q"
          placeholder="Search..."
          defaultValue={searchParams.q}
          className="flex-1"
        />
        <Button size="sm">Search</Button>
      </form>

      <List q={searchParams.q} />
    </HydrateClient>
  )
}

export default Page
