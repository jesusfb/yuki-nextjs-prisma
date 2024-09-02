import type { NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'
import { auth } from '@/server/auth'
import { EditProfileForm } from '../../_components/edit-profile-form'
import { SettingBtn } from '../../_components/setting-btn'

interface Props {
  params: { slug: string }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { user } = await auth()
  if (!user) return null

  return (
    <>
      <CardTitle>Public profile</CardTitle>

      <hr className="mb-4 mt-2" />

      <EditProfileForm name={user.name} address={user.address} image={user.image} />

      <hr className="my-4" />

      <SettingBtn slug={params.slug} />
    </>
  )
}

export default Page
