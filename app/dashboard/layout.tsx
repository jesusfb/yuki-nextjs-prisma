import { seo } from '@/lib/seo'
import { Sidebar } from './_components/side-bar'

export const metadata = seo({
  title: 'Dashboard',
  description: 'Admin dashboard',
  url: '/dashboard',
})

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <div className="hidden h-screen grid-cols-12 gap-4 lg:grid">
      <Sidebar />

      <main className="container col-span-10 my-4 max-h-full overflow-y-auto">{children}</main>
    </div>

    <div className="container grid h-screen place-items-center lg:hidden">
      <p className="text-xl font-bold">Please use a larger screen to view this page.</p>
    </div>
  </>
)

export default DashboardLayout
