import { type NextPage } from 'next'

import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { seo } from '@/lib/seo'
import { RegisterForm } from '@/app/(auth)/_components/register-form'

const Page: NextPage = () => (
  <>
    <CardHeader>
      <CardTitle className="text-2xl">Register</CardTitle>
      <CardDescription>Enter your email below to register for an account</CardDescription>
    </CardHeader>

    <RegisterForm />
  </>
)

export default Page

export const metadata = seo({
  title: 'Sign up',
  description: 'Sign up for an account',
  url: '/sign-up',
})
