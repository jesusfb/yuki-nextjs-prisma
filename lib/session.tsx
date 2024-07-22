'use client'

import type { Session, User } from '@prisma/client'
import { createContext, useContext } from 'react'

import { api } from '@/lib/trpc/react'

type SessionContext =
  | {
      isAuth: false
      isLoading: boolean
      session: null
      user: null
      refresh: () => Promise<void>
    }
  | {
      isAuth: true
      isLoading: boolean
      session: Session
      user: User
      refresh: () => Promise<void>
    }

const sessionContext = createContext<SessionContext>({} as SessionContext)

export const SessionProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { data, isLoading, refetch } = api.auth.me.useQuery()

  const user = data?.user ?? null
  const session = data?.session ?? null

  const refresh = async () => {
    await refetch()
  }

  const isAuth = !!user && !!session

  const value: SessionContext = isAuth
    ? { isAuth, isLoading, user: user, session: session, refresh }
    : { isAuth, isLoading, user: null, session: null, refresh }

  return <sessionContext.Provider value={value}>{children}</sessionContext.Provider>
}

export const useSession = () => {
  const context = useContext(sessionContext)
  if (context === undefined) throw new Error('useSession must be used within a SessionProvider')
  return context
}
