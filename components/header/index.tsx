import type { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

import { Search } from '@/components/search'
import { Auth } from './auth'
import { DesktopNav } from './desktop-nav'
import { MobileNav } from './mobile-nav'

export const Header: React.FC<{ user: User | null }> = ({ user }) => (
  <header className="sticky inset-0 z-50 border-b bg-background/70 py-2 backdrop-blur-xl backdrop-saturate-150">
    <div className="container grid grid-cols-3 items-center justify-between gap-4 md:flex">
      <MobileNav />

      <Link href="/" className="flex items-center gap-2 place-self-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={28}
          height={28}
          className="aspect-square dark:invert"
        />
        <span className="sr-only text-xl font-bold md:not-sr-only">Yuki</span>
      </Link>

      <DesktopNav />

      <Search className="hidden md:flex" />

      <Auth user={user} />
    </div>
  </header>
)
