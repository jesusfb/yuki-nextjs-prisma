import type { NextPage } from 'next'

import { About } from './_about'
import { Author } from './_author'
import { Customer } from './_customer'
import { OurProduct } from './_our-product'

const Page: NextPage = () => (
  <>
    <About />
    <Author />
    <OurProduct />
    <Customer />
  </>
)

export default Page
