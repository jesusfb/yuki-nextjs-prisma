import { Header } from '@/components/header'

const UserLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="container my-4 flex-1">{children}</main>
  </>
)

export default UserLayout
