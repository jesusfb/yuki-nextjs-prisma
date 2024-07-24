import type { NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'
import { Form } from './_form'

export const metadata = {
  title: 'Forgot Password',
}

const Page: NextPage = () => (
  <>
    <CardTitle className="mb-4 text-center">Forgot Password</CardTitle>

    <Form />
  </>
)

export default Page
