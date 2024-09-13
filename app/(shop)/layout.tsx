import { Footer } from '@/components/layouts/footer'
import { Header } from '@/components/layouts/header'

import { SessionProvider } from '@/hooks/use-session'
import { auth } from '@/server/auth'

const ShopLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <Header />
      <main className="container my-4 flex-1">{children}</main>
      <Footer />
    </SessionProvider>
  )
}

export default ShopLayout
