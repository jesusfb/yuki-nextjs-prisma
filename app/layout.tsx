import './globals.css'

import { Inter } from 'next/font/google'

import { Provider } from '@/components/provider'
import { siteConfig } from '@/lib/site'

export const metadata = siteConfig.meta
export const viewport = siteConfig.viewport

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const RootLayout: React.FC<React.PropsWithChildren> = async ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${inter.variable} font-sans`}>
      <Provider>{children}</Provider>
    </body>
  </html>
)

export default RootLayout
