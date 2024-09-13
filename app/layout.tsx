import '@/app/globals.css'

import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'

import { fonts } from '@/lib/fonts'
import { seo } from '@/lib/seo'
import { TRPCReactProvider } from '@/lib/trpc/react'
import { cn } from '@/lib/utils'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('flex flex-col font-sans', fonts)}>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Toaster richColors />
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout

export const metadata = seo({})
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(0 0% 100%)' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(240 10% 3.9%)' },
  ],
}
