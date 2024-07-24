import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { ThemeProvider } from 'next-themes'
import { extractRouterConfig } from 'uploadthing/server'

import { Toaster } from '@/components/ui/sonner'
import { SessionProvider } from '@/lib/session'
import { TRPCReactProvider } from '@/lib/trpc/react'
import { ourFileRouter } from '@/server/uploadthing'

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
    <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
    <TRPCReactProvider>
      <SessionProvider>{children}</SessionProvider>
    </TRPCReactProvider>
    <Toaster richColors />
  </ThemeProvider>
)
