import type { NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'
import { seo } from '@/lib/seo'
import { Form, type Props } from './_form'

export const metadata = seo({
  title: 'Reset Password',
  url: '/forgot-password/reset',
  images: '/api/og?title=Reset Password',
})

const Page: NextPage<Props> = ({ searchParams }) => (
  <>
    <CardTitle className="mb-4 text-center">Reset Password</CardTitle>
    <Form searchParams={searchParams} />
  </>
)

export default Page
