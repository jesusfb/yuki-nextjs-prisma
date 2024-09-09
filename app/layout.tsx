import '@/app/globals.css'

import { GeistSans } from 'geist/font/sans'

/* Providers */
import { ThemeProvider } from 'next-themes'
import { TRPCReactProvider } from '@/lib/trpc/react'

/* Lib */
import { seo } from '@/lib/seo'
import { cn } from '@/lib/utils'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans', GeistSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout

export const metadata = seo({})
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(0 0% 100%)' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(240 10% 3.9%)' },
  ],
}
