import type { NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'
import { seo } from '@/lib/seo'
import { Form } from './_form'

export const metadata = seo({
  title: 'Forgot Password',
  url: '/forgot-password',
  images: '/api/og?title=Forgot Password',
})
const Page: NextPage = () => (
  <>
    <CardTitle className="mb-4 text-center">Forgot Password</CardTitle>

    <Form />
  </>
)

export default Page
