import type { Session, User } from '@prisma/client'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { ThemeProvider } from 'next-themes'
import { extractRouterConfig } from 'uploadthing/server'

import { Toaster } from '@/components/ui/sonner'
import { SessionProvider } from '@/lib/session'
import { TRPCReactProvider } from '@/lib/trpc/react'
import { ourFileRouter } from '@/server/uploadthing'

interface Props {
  user: User | null
  session: Session | null
  children: Readonly<React.ReactNode>
}

export const Provider: React.FC<Props> = ({ children, user, session }) => (
  <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
    <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
    <SessionProvider user={user} session={session}>
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </SessionProvider>
    <Toaster richColors />
  </ThemeProvider>
)
