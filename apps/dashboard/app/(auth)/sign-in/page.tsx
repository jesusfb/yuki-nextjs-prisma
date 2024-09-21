import type { NextPage } from 'next'

import { CardContent, CardDescription, CardHeader, CardTitle } from '@yuki/ui/card'

import type { Props } from '@/app/(auth)/_components/login-form'
import { LoginForm } from '@/app/(auth)/_components/login-form'
import { seo } from '@/lib/seo'
import { getBaseUrl } from '@/lib/utils'

const Page: NextPage<Props> = (props) => (
  <>
    <CardHeader>
      <CardTitle className="text-2xl">Login</CardTitle>
      <CardDescription>Enter your email below to login to your account</CardDescription>
    </CardHeader>

    <CardContent>
      <LoginForm {...props} setCookies={setCookies} />
    </CardContent>
  </>
)

export default Page

export const metadata = seo({
  title: 'Sign in',
  description: 'Sign in to your account',
  url: '/sign-in',
})

const setCookies = async (cookie: { name: string; value: string; attributes: object }) => {
  'use server'
  const { cookies } = await import('next/headers')
  cookies().set(cookie.name, cookie.value, {
    ...cookie.attributes,
    domain: new URL(getBaseUrl()).hostname.replace(/^.*?\.(.*)/, '$1'),
  })
}
