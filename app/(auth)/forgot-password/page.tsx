import type { NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'
import { seo } from '@/lib/seo'
import { ForgotPasswordForm } from '../_components/forgot-password-form'

export const metadata = seo({
  title: 'Forgot Password',
  url: '/forgot-password',
  images: '/api/og?title=Forgot Password',
})
const Page: NextPage = () => (
  <>
    <CardTitle className="mb-4 text-center">Forgot Password</CardTitle>

    <ForgotPasswordForm />
  </>
)

export default Page
