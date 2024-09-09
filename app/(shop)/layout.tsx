import { Footer } from '@/components/layouts/footer'
import { Header } from '@/components/layouts/header'
import { Toaster } from '@/components/ui/sonner'
import { SessionProvider } from '@/hooks/use-session'
import { TRPCReactProvider } from '@/lib/trpc/react'
import { auth } from '@/server/auth'

const ShopLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <TRPCReactProvider>
        <Header />
        <main className="container my-4 flex-1">{children}</main>
        <Footer />
      </TRPCReactProvider>
      <Toaster richColors />
    </SessionProvider>
  )
}

export default ShopLayout
