import { Sidebar } from '@/components/side-bar'

export const metadata = {
  title: 'Dashboard',
}

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="hidden h-screen grid-cols-12 gap-4 md:grid">
        <Sidebar />

        <main className="col-span-10 mr-4 max-h-full overflow-y-auto">{children}</main>
      </div>

      <div className="container grid h-screen place-items-center md:hidden">
        <p className="text-xl font-bold">Please use a larger screen to view this page.</p>
      </div>
    </>
  )
}

export default DashboardLayout
