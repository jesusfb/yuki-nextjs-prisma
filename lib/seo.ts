import { type OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { type Metadata } from 'next'

import { getBaseUrl } from '@/lib/utils'

interface Params {
  title?: string
  description?: string
  images?: OpenGraph['images']
  url?: string
}

export const seo = (params: Params): Metadata => {
  const title = params.title ? `${params.title} | Yuki` : 'Yuki'
  const description =
    params.description ??
    'Yuki is a full-stack e-commerce platform built with Next.js, Prisma, and tRPC. It is a modern, fast, and secure platform that allows you to create your own e-commerce store with ease. Yuki is built with the latest technologies and best practices to ensure that your store is fast, secure, and scalable.'
  const images = params.images ?? ['/api/og']
  const url = params.url ? `${getBaseUrl()}/${params.url}` : getBaseUrl()

  return {
    metadataBase: new URL(getBaseUrl()),
    title,
    description,
    creator: 'Tiesen',
    category: 'E-commerce',
    applicationName: 'Yuki',
    alternates: { canonical: url },
    facebook: { appId: '523462826928110' },
    authors: { name: 'Tiesen', url: 'https://tiesen.id.vn' },
    keywords: ['Yuki', 'E-commerce', 'Next.js', 'Prisma', 'tRPC'],
    openGraph: { url, images, type: 'website', siteName: 'Yuki' },
    twitter: { card: 'summary_large_image', creatorId: '@tiesen243' },
    icons: { icon: '/favicon.ico', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
  }
}
