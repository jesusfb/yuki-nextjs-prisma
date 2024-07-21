import './globals.css'

import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { siteConfig } from '@/lib/site'
import { TRPCReactProvider } from '@/lib/trpc/react'

export const metadata = siteConfig.meta
export const viewport = siteConfig.viewport

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${inter.variable} font-sans`}>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
