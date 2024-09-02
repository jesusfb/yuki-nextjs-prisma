import type { NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'
import { seo } from '@/lib/seo'
import { SignInForm } from '../_components/sign-in-form'

export const metadata = seo({
  title: 'Sign In',
  url: '/sign-in',
  images: '/api/og?title=Sign In',
})

const Page: NextPage = () => (
  <>
    <CardTitle className="mb-4 text-center">Sign In</CardTitle>

    <SignInForm />
  </>
)

export default Page
