import './globals.css'

import { Inter } from 'next/font/google'

import { seo } from '@/lib/seo'
import { auth } from '@/server/auth'
import { Provider } from './_provider'

export const metadata = seo({})
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(0 0% 100%)' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(240 10% 3.9%)' },
  ],
}

const inter = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-sans' })

const RootLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const { user, session } = await auth()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} flex flex-col font-sans`}>
        <Provider session={session} user={user}>
          {children}
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
