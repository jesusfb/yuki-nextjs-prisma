import type { NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'
import { Form } from './_form'

export const metadata = {
  title: 'Sign In',
}

const Page: NextPage = () => (
  <>
    <CardTitle className="mb-4 text-center">Sign In</CardTitle>

    <Form />
  </>
)

export default Page
