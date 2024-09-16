import type { NextPage } from 'next'

import * as card from '@/components/ui/card'
import { RegisterForm } from '@/app/(auth)/_components/register-form'

import { seo } from '@/lib/seo'

const Page: NextPage = () => (
  <>
    <card.CardHeader>
      <card.CardTitle className="text-2xl">Register</card.CardTitle>
      <card.CardDescription>Enter your email below to register for an account</card.CardDescription>
    </card.CardHeader>

    <card.CardContent asChild>
      <RegisterForm />
    </card.CardContent>
  </>
)

export default Page

export const metadata = seo({
  title: 'Sign up',
  description: 'Sign up for an account',
  url: '/sign-up',
})
