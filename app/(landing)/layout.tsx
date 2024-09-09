import { Footer } from '@/components/layouts/footer'

const LandingLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
)

export default LandingLayout
