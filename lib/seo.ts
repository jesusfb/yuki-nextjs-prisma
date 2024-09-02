import type { Metadata } from 'next'
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

import { getBaseUrl } from '@/lib/utils'

interface Seo {
  title?: string
  description?: string
  images?: OpenGraph['images']
  url?: string
}

export const seo = (params: Seo): Metadata => {
  const url = params.url ? `${getBaseUrl()}${params.url}` : getBaseUrl()

  return {
    metadataBase: new URL(getBaseUrl()),
    applicationName: 'Yuki',
    title: params.title ? `${params.title} | Yuki` : 'Yuki',
    description: params.description ?? 'A ecommerce website for selling digital products',
    category: 'E-commerce',
    keywords: ['E-commerce', 'Digital', 'Products'],
    authors: { name: 'Tiesen', url: 'https://tiesen.id.vn' },
    icons: { icon: '/favicon.ico', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
    twitter: { creatorId: '@tiesen243', card: 'summary_large_image' },
    openGraph: {
      url,
      locale: 'vi_VN',
      type: 'website',
      siteName: 'Yuki',
      images: params.images ?? [{ url: '/api/og', width: 1200, height: 630, alt: 'Yuki' }],
    },
  }
}
