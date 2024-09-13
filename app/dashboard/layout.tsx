import { redirect } from 'next/navigation'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { extractRouterConfig } from 'uploadthing/server'

import { SidebarLayout, SidebarTrigger } from '@/components/ui/sidebar'
import { auth } from '@/server/auth'
import { ourFileRouter } from '@/server/uploadthing'
import { seo } from '@/lib/seo'
import { SessionProvider } from '@/hooks/use-session'
import { AppSidebar } from './_components/app-sidebar'

const DashboardLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const { cookies } = await import('next/headers')

  const session = await auth()
  if (!session || !session.user) redirect('/sign-in')

  return (
    <SessionProvider session={session}>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

      <SidebarLayout defaultOpen={cookies().get('sidebar:state')?.value === 'true'}>
        <AppSidebar user={session.user} />
        <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
          <div className="h-full overflow-y-auto rounded-md border-dashed px-4 py-2 md:border-2">
            <SidebarTrigger />
            <section>{children}</section>
          </div>
        </main>
      </SidebarLayout>
    </SessionProvider>
  )
}

export default DashboardLayout

export const metadata = seo({
  title: 'Dashboard',
  url: '/dashboard',
})
