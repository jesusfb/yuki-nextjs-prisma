import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'
import { SessionProvider } from '@/lib/session'
import { TRPCReactProvider } from '@/lib/trpc/react'

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
    <TRPCReactProvider>
      <SessionProvider>{children}</SessionProvider>
    </TRPCReactProvider>
    <Toaster richColors />
  </ThemeProvider>
)
