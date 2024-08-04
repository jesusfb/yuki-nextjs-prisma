import type { NextPage } from 'next'

import { About } from './_about'
import { Customer } from './_customer'
import { Product } from './_product'
import { Story } from './_story'
import { about } from '@/lib/data'
import { getBaseUrl } from '@/lib/site'

export const metadata = {
  title: about.title,
  description: about.desciption,
  openGraph: {
    images: [`/og?title=${about.title}&desc=${about.desciption}`],
    url: `${getBaseUrl()}/about`,
  },
  alternates: { canonical: `${getBaseUrl()}/about` },
}

const Page: NextPage = () => (
  <main className="flex min-h-dvh flex-col items-center justify-center">
    <About />
    <Story />
    <Product />
    <Customer />
  </main>
)

export default Page
