import type { NextPage } from 'next'

import * as card from '@/components/ui/card'
import { ResetPasswordForm } from '@/app/(auth)/_components/reset-password-form'

import { seo } from '@/lib/seo'

const Page: NextPage<Props> = ({ searchParams }) => (
  <>
    <card.CardHeader>
      <card.CardTitle className="text-2xl">Reset Password</card.CardTitle>
      <card.CardDescription>
        Enter your new password below to reset your password and login
      </card.CardDescription>
    </card.CardHeader>

    <card.CardContent asChild>
      <ResetPasswordForm searchParams={searchParams} />
    </card.CardContent>
  </>
)

export default Page

interface Props {
  searchParams: { token: string; email: string }
}

export const metadata = seo({
  title: 'Reset Password',
  description: 'Enter your new password below',
  url: '/forgot-password/reset',
})
