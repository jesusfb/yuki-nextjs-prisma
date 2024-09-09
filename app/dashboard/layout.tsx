import { AppSidebar } from '@/app/dashboard/_components/app-sidebar'
import { SidebarLayout, SidebarTrigger } from '@/components/ui/sidebar'

import { seo } from '@/lib/seo'

const DashboardLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const { cookies } = await import('next/headers')

  return (
    <SidebarLayout defaultOpen={cookies().get('sidebar:state')?.value === 'true'}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
        <div className="h-full overflow-y-auto rounded-md border-dashed px-4 py-2 md:border-2">
          <SidebarTrigger />
          {children}
        </div>
      </main>
    </SidebarLayout>
  )
}

export default DashboardLayout

export const metadata = seo({
  title: 'Dashboard',
  url: '/dashboard',
})
