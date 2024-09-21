import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export { cn }

export * from 'geist/font/mono'
export * from 'geist/font/sans'
export * from 'next-themes'
