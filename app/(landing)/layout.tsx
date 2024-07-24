import { Footer } from '@/components/footer'

const LandingLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <main className="flex min-h-dvh flex-col items-center justify-center">{children}</main>
    <Footer />
  </>
)

export default LandingLayout
