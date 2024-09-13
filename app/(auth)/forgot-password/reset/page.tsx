import { type NextPage } from 'next'

import type { Props } from '@/app/(auth)/_components/reset-password-form'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { seo } from '@/lib/seo'
import { ResetPasswordForm } from '@/app/(auth)/_components/reset-password-form'

const Page: NextPage<Props> = ({ searchParams }) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>
          Enter your new password below to reset your password and login
        </CardDescription>
      </CardHeader>

      <ResetPasswordForm searchParams={searchParams} />
    </>
  )
}

export default Page

export const metadata = seo({
  title: 'Reset Password',
  description: 'Enter your new password below',
  url: '/forgot-password/reset',
})
