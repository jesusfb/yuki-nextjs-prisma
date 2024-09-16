import type { NextPage } from 'next'

import * as card from '@/components/ui/card'
import { ForgotPasswordForm } from '@/app/(auth)/_components/forgot-password-form'

import { seo } from '@/lib/seo'

const Page: NextPage = () => (
  <>
    <card.CardHeader>
      <card.CardTitle className="text-2xl">Forgot Password</card.CardTitle>
      <card.CardDescription>Enter your email below to reset your password</card.CardDescription>
    </card.CardHeader>

    <card.CardContent asChild>
      <ForgotPasswordForm />
    </card.CardContent>
  </>
)

export default Page

export const metadata = seo({
  title: 'Forgot Password',
  description: 'Enter your email below to reset your password',
  url: '/forgot-password',
})
