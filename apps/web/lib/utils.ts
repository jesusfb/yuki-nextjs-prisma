import { env } from '@/env'

export function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`
  // eslint-disable-next-line no-restricted-properties
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export function getDashboardUrl() {
  if (env.NODE_ENV === 'production') return `https://dashboard.${env.VERCEL_PROJECT_PRODUCTION_URL}`
  return 'http://localhost:3001'
}

export function slugify(str: string, id?: string): string {
  str = str
    // Lower case everything
    .toLowerCase()
    // Handle Vietnamese
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    // Remove special characters
    .replace(/([^0-9a-z-\s])/g, '')
    // Replace spaces with -
    .replace(/\s+/g, '-')
    // Remove all dashes
    .replace(/-+/g, '-')
    // Remove all dashes at the beginning and the end
    .replace(/^-+|-+$/g, '')

  if (id) str += `-${id}`
  return str
}

export function getIdFromSlug(slug: string): string {
  return slug.split('-').pop() ?? ''
}
