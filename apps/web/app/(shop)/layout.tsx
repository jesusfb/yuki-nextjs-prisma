import { redirect } from 'next/navigation'

import { auth } from '@yuki/auth'
import { SessionProvider } from '@yuki/auth/react'

const ShopLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await auth()
  if (!session) redirect('/home')

  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default ShopLayout
