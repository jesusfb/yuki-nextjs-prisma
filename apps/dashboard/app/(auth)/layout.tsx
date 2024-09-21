import { Card } from '@yuki/ui/card'

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main className="grid min-h-dvh place-items-center">
    <Card className="w-svw max-w-screen-sm border-none md:border-solid">{children}</Card>
  </main>
)

export default AuthLayout
