'use client'

import { FilterIcon } from 'lucide-react'
import { Drawer } from 'vaul'

export const MobileDrawer: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Drawer.Root shouldScaleBackground={true}>
    <Drawer.Trigger className="flex items-center gap-2 text-lg font-bold md:hidden">
      <FilterIcon /> Filter
    </Drawer.Trigger>

    <Drawer.Portal>
      <Drawer.Overlay />
      <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex flex-col gap-8 rounded-t-lg border bg-background p-4">
        <div className="mx-auto h-2 w-20 rounded-full bg-muted" />
        {children}
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
)
