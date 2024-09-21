import Link from 'next/link'

import { Button } from '@yuki/ui/button'
import { Card, CardFooter } from '@yuki/ui/card'
import { DiscordIcon } from '@yuki/ui/icons'

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main className="grid min-h-dvh place-items-center">
    <Card className="w-svw max-w-screen-sm border-none md:border-solid">
      {children}

      <CardFooter className="flex-col">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/api/auth/discord">
            <DiscordIcon className="mr-4 size-6" /> Login with Discord
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </main>
)

export default AuthLayout
