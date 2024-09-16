import Link from 'next/link'

import { DiscordIcon } from '@/components/discord-icon'
import { Button } from '@/components/ui/button'
import * as card from '@/components/ui/card'

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main className="grid min-h-dvh place-items-center">
    <card.Card className="w-svw max-w-screen-sm border-none md:border-solid">
      {children}

      <card.CardFooter className="flex-col">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/api/auth/discord">
            <DiscordIcon className="size-6 mr-4" /> Login with Discord
          </Link>
        </Button>
      </card.CardFooter>
    </card.Card>
  </main>
)

export default AuthLayout
