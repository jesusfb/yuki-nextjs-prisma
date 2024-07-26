import { auth } from '@/server/auth'
import { redirect } from 'next/navigation'

const EditUserLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const { user, session } = await auth()
  if (!session || !user) return redirect('/')

  return <>{children}</>
}

export default EditUserLayout
