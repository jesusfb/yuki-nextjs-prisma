import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { extractRouterConfig } from 'uploadthing/server'

import { SessionProvider } from '@/hooks/use-session'
import { TRPCReactProvider } from '@/lib/trpc/react'
import { auth } from '@/server/auth'
import { ourFileRouter } from '@/server/uploadthing'
import { Toaster } from '@/components/ui/sonner'

const MainLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <TRPCReactProvider>{children}</TRPCReactProvider>
      <Toaster richColors />
    </SessionProvider>
  )
}

export default MainLayout
