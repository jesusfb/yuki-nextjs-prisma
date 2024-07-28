import { redirect } from 'next/navigation'

import { auth } from '@/server/auth'

const EditUserLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const { user, session } = await auth()
  if (!session || !user) return redirect('/')

  return <>{children}</>
}

export default EditUserLayout
