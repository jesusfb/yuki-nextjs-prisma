import type { NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'
import { Form, type Props } from './_form'

export const metadata = {
  title: 'Reset Password',
}

const Page: NextPage<Props> = ({ searchParams }) => (
  <>
    <CardTitle className="mb-4 text-center">Reset Password</CardTitle>
    <Form searchParams={searchParams} />
  </>
)

export default Page
