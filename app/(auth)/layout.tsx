import Link from 'next/link'

import { DiscordIcon } from '@/components/discord-icon'
import { Button } from '@/components/ui/button'
import { Card, CardFooter } from '@/components/ui/card'

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main className="grid min-h-dvh place-items-center">
    <Card className="w-svw max-w-screen-sm border-none md:border-solid">
      {children}

      <CardFooter className="flex-col">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/api/auth/discord">
            <DiscordIcon className="size-6 mr-4" /> Login with Discord
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </main>
)

export default AuthLayout
