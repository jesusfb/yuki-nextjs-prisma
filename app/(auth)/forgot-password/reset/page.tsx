import type { NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'
import { seo } from '@/lib/seo'
import { ResetPasswordForm, type Props } from '../../_components/reset-password-form'

export const metadata = seo({
  title: 'Reset Password',
  url: '/forgot-password/reset',
  images: '/api/og?title=Reset Password',
})

const Page: NextPage<Props> = ({ searchParams }) => (
  <>
    <CardTitle className="mb-4 text-center">Reset Password</CardTitle>
    <ResetPasswordForm searchParams={searchParams} />
  </>
)

export default Page
