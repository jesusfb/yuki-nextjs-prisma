import { type NextPage } from 'next'

import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { seo } from '@/lib/seo'
import { LoginForm } from '@/app/(auth)/_components/login-form'

const Page: NextPage = () => (
  <>
    <CardHeader>
      <CardTitle className="text-2xl">Login</CardTitle>
      <CardDescription>Enter your email below to login to your account</CardDescription>
    </CardHeader>

    <LoginForm />
  </>
)

export default Page

export const metadata = seo({
  title: 'Sign in',
  description: 'Sign in to your account',
  url: '/sign-in',
})
