import Image from 'next/image'

import { Navigation } from './navigation'

export const Sidebar: React.FC = () => (
  <aside className="col-span-2 h-full border-r">
    <Image src="/logo.svg" alt="logo" width={40} height={40} className="mx-auto my-6 dark:invert" />

    <hr />

    <Navigation />
  </aside>
)
