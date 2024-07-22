import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'
import { type Props, SessionProvider } from '@/lib/session'
import { TRPCReactProvider } from '@/lib/trpc/react'

export const Provider: React.FC<Props> = ({ children, user, session }) => (
  <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
    <TRPCReactProvider>
      <SessionProvider user={user} session={session}>
        {children}
      </SessionProvider>
    </TRPCReactProvider>
    <Toaster richColors />
  </ThemeProvider>
)
