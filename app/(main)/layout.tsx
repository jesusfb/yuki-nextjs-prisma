import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { SessionProvider } from '@/lib/session'
import { auth } from '@/server/auth'

const MainLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const { user, session } = await auth()

  return (
    <SessionProvider user={user} session={session}>
      <Header user={user} />
      <main className="container my-4 flex-1">{children}</main>
      <Footer />
    </SessionProvider>
  )
}

export default MainLayout
