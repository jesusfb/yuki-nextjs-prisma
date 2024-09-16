import type { NextPage } from 'next'

import * as card from '@/components/ui/card'
import { LoginForm } from '@/app/(auth)/_components/login-form'

import { seo } from '@/lib/seo'

const Page: NextPage = () => (
  <>
    <card.CardHeader>
      <card.CardTitle className="text-2xl">Login</card.CardTitle>
      <card.CardDescription>Enter your email below to login to your account</card.CardDescription>
    </card.CardHeader>

    <card.CardContent asChild>
      <LoginForm />
    </card.CardContent>
  </>
)

export default Page

export const metadata = seo({
  title: 'Sign in',
  description: 'Sign in to your account',
  url: '/sign-in',
})
