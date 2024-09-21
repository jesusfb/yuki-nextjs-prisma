import type { NextPage } from 'next'

import { CardContent, CardDescription, CardHeader, CardTitle } from '@yuki/ui/card'

import { RegisterForm } from '@/app/(auth)/_components/register-form'
import { seo } from '@/lib/seo'

const Page: NextPage = () => (
  <>
    <CardHeader>
      <CardTitle className="text-2xl">Register</CardTitle>
      <CardDescription>Enter your email below to register for an account</CardDescription>
    </CardHeader>

    <CardContent>
      <RegisterForm />
    </CardContent>
  </>
)

export default Page

export const metadata = seo({
  title: 'Sign up',
  description: 'Sign up for an account',
  url: '/sign-up',
})
