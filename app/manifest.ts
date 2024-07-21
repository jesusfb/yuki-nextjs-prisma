import type { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/site'

const manifest = (): MetadataRoute.Manifest => ({
  name: siteConfig.meta.applicationName ?? '',
  short_name: siteConfig.meta.applicationName ?? '',
  description: siteConfig.meta.description ?? '',
  display: 'standalone',
  start_url: '/',
  background_color: 'hsl(0 0% 3.9%)',
  theme_color: 'hsl(0 0% 3.9%)',
  icons: [
    { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    { src: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { src: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
  ],
})

export default manifest
