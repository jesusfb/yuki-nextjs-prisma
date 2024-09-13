import { type NextPage } from 'next'

import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ForgotPasswordForm } from '@/app/(auth)/_components/forgot-password-form'

import { seo } from '@/lib/seo'

const Page: NextPage = () => (
  <>
    <CardHeader>
      <CardTitle className="text-2xl">Forgot Password</CardTitle>
      <CardDescription>Enter your email below to reset your password</CardDescription>
    </CardHeader>

    <ForgotPasswordForm />
  </>
)

export default Page

export const metadata = seo({
  title: 'Forgot Password',
  description: 'Enter your email below to reset your password',
  url: '/forgot-password',
})
