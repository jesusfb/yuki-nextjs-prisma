import type { NextPage } from 'next'

import * as card from '@yuki/ui/card'

import type { Props } from '@/app/(auth)/_components/login-form'
import { LoginForm } from '@/app/(auth)/_components/login-form'
import { seo } from '@/lib/seo'
import { getBaseUrl } from '@/lib/utils'

const Page: NextPage<Props> = (props) => (
  <>
    <card.CardHeader>
      <card.CardTitle className="text-2xl">Login</card.CardTitle>
      <card.CardDescription>Enter your email below to login to your account</card.CardDescription>
    </card.CardHeader>

    <card.CardContent className="space-y-4" asChild>
      <LoginForm {...props} setCookies={setCookies} />
    </card.CardContent>
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
