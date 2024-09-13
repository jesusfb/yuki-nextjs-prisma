import { type NextPage } from 'next'

import { auth } from '@/server/auth'
import { UpdateProfileForm } from '../_components/update-profile-form'

const Page: NextPage = async () => {
  const session = await auth()
  if (!session) return null

  return <UpdateProfileForm name={session.user.name} avatar={session.user.avatar} />
}

export default Page
