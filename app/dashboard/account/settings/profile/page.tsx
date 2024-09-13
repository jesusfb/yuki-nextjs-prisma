import { type NextPage } from 'next'

import { UpdateProfileForm } from '../_components/update-profile-form'

import { auth } from '@/server/auth'

const Page: NextPage = async () => {
  const session = await auth()
  if (!session) return null

  return <UpdateProfileForm name={session.user.name} avatar={session.user.avatar} />
}

export default Page
