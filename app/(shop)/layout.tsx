import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const ShopLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="container my-4 flex-1">{children}</main>
    <Footer />
  </>
)

export default ShopLayout
