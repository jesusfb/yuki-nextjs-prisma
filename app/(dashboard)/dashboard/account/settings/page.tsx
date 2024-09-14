import type { NextPage } from 'next'

import { Accordion } from '@/components/ui/accordion'
import { CardTitle } from '@/components/ui/card'
import { AccountSetting } from '@/app/(dashboard)/_components/settings/account-settings'
import { DangerZone } from '@/app/(dashboard)/_components/settings/danger-zone'
import { ThemeSetting } from '@/app/(dashboard)/_components/settings/theme-setting'

const Page: NextPage = () => (
  <>
    <CardTitle>Settings</CardTitle>

    <Accordion type="single" collapsible className="w-full">
      <AccountSetting />
      <ThemeSetting />
      <DangerZone />
    </Accordion>
  </>
)

export default Page
