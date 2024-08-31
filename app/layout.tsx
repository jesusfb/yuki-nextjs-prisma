import './globals.css'

import { Inter } from 'next/font/google'

import { Provider } from '@/components/provider'
import { seo } from '@/lib/seo'

export const metadata = seo({})
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(0 0% 100%)' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(240 10% 3.9%)' },
  ],
}

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const RootLayout: React.FC<React.PropsWithChildren> = async ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${inter.variable} flex flex-col font-sans`}>
      <Provider>{children}</Provider>
    </body>
  </html>
)

export default RootLayout
