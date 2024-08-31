import type { NextPage } from 'next'

import { about } from '@/lib/data'
import { seo } from '@/lib/seo'
import { About } from './_about'
import { Customer } from './_customer'
import { Product } from './_product'
import { Story } from './_story'

export const metadata = seo({
  title: 'About Us',
  description: about.description,
  url: '/about',
  images: `/api/og?title=About Us&desc=${about.description}`,
})

const Page: NextPage = () => (
  <main className="flex min-h-dvh flex-col items-center justify-center">
    <About />
    <Story />
    <Product />
    <Customer />
  </main>
)

export default Page
