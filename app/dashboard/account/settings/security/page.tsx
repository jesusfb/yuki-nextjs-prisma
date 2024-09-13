import { BadgeCheckIcon, LockIcon } from 'lucide-react'
import { type NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'
import { ChangePasswordForm } from '../_components/change-password-form'
import { LinkedAccounts } from '../_components/linked-accounts'

const Page: NextPage = () => (
  <>
    <h2 className="mb-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Account Security
    </h2>

    <CardTitle className="mb-4 flex items-center gap-2">
      <LockIcon />
      Change password
    </CardTitle>
    <ChangePasswordForm />

    <hr className="my-8" />

    <CardTitle className="mb-4 flex items-center gap-2">
      <BadgeCheckIcon />
      Linked accounts
    </CardTitle>

    <LinkedAccounts />
  </>
)

export default Page
