import type { NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'
import { seo } from '@/lib/seo'
import { SignUpForm } from '../_components/sign-up-form'

export const metadata = seo({
  title: 'Sign Up',
  url: '/sign-up',
  images: '/api/og?title=Sign Up',
})

const Page: NextPage = () => (
  <>
    <CardTitle className="mb-4 text-center">Sign Up</CardTitle>

    <SignUpForm />
  </>
)

export default Page
