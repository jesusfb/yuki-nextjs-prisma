import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import slugify from 'slugify'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createSlug({ str, id }: { str: string; id: string }) {
  const slug = slugify(str, {
    trim: true,
    lower: true,
    locale: 'en',
    strict: true,
  })

  return `${slug}-${id}`
}
