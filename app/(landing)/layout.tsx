import { Footer } from '@/components/footer'

const LandingLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
)

export default LandingLayout
