import { type NextPage } from 'next'

import { Accordion } from '@/components/ui/accordion'
import { CardTitle } from '@/components/ui/card'
import { AccountSetting } from './_components/account-settings'
import { DangerZone } from './_components/danger-zone'
import { ThemeSetting } from './_components/theme-setting'

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
