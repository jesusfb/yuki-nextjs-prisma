import type { NextPage } from 'next'
import { BadgeCheckIcon, LockIcon } from 'lucide-react'

import * as card from '@/components/ui/card'
import { ChangePasswordForm } from '@/app/(dashboard)/_components/settings/change-password-form'
import { LinkedAccounts } from '@/app/(dashboard)/_components/settings/linked-accounts'

const Page: NextPage = () => (
  <>
    <h2 className="mb-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Account Security
    </h2>

    <card.CardTitle className="mb-4 flex items-center gap-2">
      <LockIcon />
      Change password
    </card.CardTitle>
    <ChangePasswordForm />

    <hr className="my-8" />

    <card.CardTitle className="mb-4 flex items-center gap-2">
      <BadgeCheckIcon />
      Linked accounts
    </card.CardTitle>

    <LinkedAccounts />
  </>
)

export default Page
