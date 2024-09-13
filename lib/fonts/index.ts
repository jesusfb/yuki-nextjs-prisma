import localFont from 'next/font/local'

const geistSans = localFont({
  src: './GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 200 300 400 500 600 700 800 900',
})

const geistMono = localFont({
  src: './GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const fonts = `${geistSans.variable} ${geistMono.variable} font-sans`
