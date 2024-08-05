import { redirect } from 'next/navigation'

import { auth } from '@/server/auth'
import { getIdFromSlug } from '@/lib/utils'

interface Props {
  params: { slug: string }
  children: React.ReactNode
}

export const metadata = {
  title: 'Settings | Yuki',
}

const EditUserLayout: React.FC<Props> = async ({ params, children }) => {
  const { user, session } = await auth()
  if (!session || !user) return redirect('/')

  const id = getIdFromSlug(params.slug)
  if (id !== user.id) return redirect('/')

  return <>{children}</>
}

export default EditUserLayout
