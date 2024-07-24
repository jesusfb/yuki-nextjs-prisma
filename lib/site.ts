import { FacebookIcon, GithubIcon, type LucideIcon, TwitchIcon, TwitterIcon } from 'lucide-react'
import type { Metadata, Viewport } from 'next'

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return window.location.origin
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return `http://localhost:${process.env.PORT ?? 3000}`
}

interface SiteConfig {
  meta: Metadata
  viewport: Viewport
  email: string
  socials: { label: string; url: string; icon: LucideIcon }[]
  navs: { label: string; url: string }[]
}

export const siteConfig: SiteConfig = {
  meta: {
    metadataBase: new URL(getBaseUrl()),
    title: { default: 'Yuki', template: '%s | Yuki' },
    applicationName: 'Yuki',
    category: 'E-commerce',
    keywords: ['E-commerce', 'Digital', 'Products'],
    authors: [{ name: 'Tiesen', url: 'https://tiesen.id.vn' }],
    description: 'A ecommerce website for selling digital products',
    icons: { icon: '/favicon.ico', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
    twitter: { creatorId: '@tiesen243', card: 'summary_large_image' },
    openGraph: {
      locale: 'vi_VN',
      type: 'website',
      siteName: 'Yuki',
      url: getBaseUrl(),
      images: { url: '/og', width: 1200, height: 630, alt: 'Yuki' },
    },
  },
  viewport: {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'hsl(0 0% 100%)' },
      { media: '(prefers-color-scheme: dark)', color: 'hsl(240 10% 3.9%)' },
    ],
  },
  email: 'ttien56906@gmail.com',
  socials: [
    { label: 'Facebook', url: 'https://facebook.com/tiesen243', icon: FacebookIcon },
    { label: 'Twitter', url: 'https://twitter.com/tiesen243', icon: TwitterIcon },
    { label: 'Github', url: 'https://github.com/tiesen243', icon: GithubIcon },
  ],
  navs: [
    { label: 'Home', url: '/' },
    { label: 'Shop', url: '/shop' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ],
}
