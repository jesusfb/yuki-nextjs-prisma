import { redirect } from 'next/navigation'

import { auth } from '@yuki/auth'
import { SessionProvider } from '@yuki/auth/react'

import { Header } from '../_components/layouts/header'

const ShopLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await auth()
  if (!session) redirect('/home')

  return (
    <SessionProvider session={session}>
      <Header />
      <main className="container flex-1 py-4">{children}</main>
    </SessionProvider>
  )
}

export default ShopLayout
