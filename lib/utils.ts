import { clsx, type ClassValue } from 'clsx'
import slugify from 'slugify'
import { twMerge } from 'tailwind-merge'

import { env } from '@/env'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`
  return `http://localhost:3000`
}

export function createSlug({ str, suffix }: { str: string; suffix: string }) {
  const slug = slugify(str, {
    trim: true,
    lower: true,
    locale: 'en',
    strict: true,
  })

  return `${slug}-${suffix}`
}

export function getIdFromSlug(slug: string) {
  return slug.split('-').slice(-1)[0]
}
