import { SessionProvider } from '@/hooks/use-session'
import { TRPCReactProvider } from '@/lib/trpc/react'
import { auth } from '@/server/auth'

const MainLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </SessionProvider>
  )
}

export default MainLayout
