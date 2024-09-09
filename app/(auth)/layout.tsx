import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardFooter } from '@/components/ui/card'
import { TRPCReactProvider } from '@/lib/trpc/react'

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <TRPCReactProvider>
    <main className="grid min-h-dvh place-items-center">
      <Card className="w-svw max-w-screen-sm border-none md:border-solid">
        {children}

        <CardFooter className="flex-col">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/api/auth/discord">Login with Discord</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  </TRPCReactProvider>
)

export default AuthLayout
