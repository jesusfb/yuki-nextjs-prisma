import '@yuki/ui/tailwind.css'

import { cn, GeistMono, GeistSans, ThemeProvider } from '@yuki/ui'

import { Footer } from '@/components/footer'
import { seo } from '@/lib/seo'

const RootLayout: React.FC<React.PropsWithChildren> = async ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('min-h-dvh font-sans', GeistSans.variable, GeistMono.variable)}>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        {children}
        <Footer />
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
