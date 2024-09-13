import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

export const Brand: React.FC<{ className?: string }> = ({ className }) => (
  <Link href="/" className="flex items-center gap-2">
    <Image src="/logo.svg" alt="logo" width={28} height={28} className="object-cover dark:invert" />
    <span className={cn('sr-only text-xl font-bold md:not-sr-only', className)}>Yuki</span>
  </Link>
)
