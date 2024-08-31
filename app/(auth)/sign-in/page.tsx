import type { NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'
import { seo } from '@/lib/seo'
import { Form } from './_form'

export const metadata = seo({
  title: 'Sign In',
  url: '/sign-in',
  images: '/api/og?title=Sign In',
})

const Page: NextPage = () => (
  <>
    <CardTitle className="mb-4 text-center">Sign In</CardTitle>

    <Form />
  </>
)

export default Page
