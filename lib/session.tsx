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
      user: Omit<User, 'password'>
      refresh: () => Promise<void>
    }

const sessionContext = createContext<SessionContext>({} as SessionContext)

export const SessionProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { data, isLoading, refetch } = api.auth.me.useQuery()

  const refresh = async () => {
    await refetch()
  }

  const user = data?.user ?? null,
    session = data?.session ?? null

  const isAuth = !!user && !!session

  return (
    <sessionContext.Provider
      // @ts-expect-error This is a valid value
      value={
        isAuth
          ? { isAuth, isLoading, user, session, refresh }
          : { isAuth, isLoading, user: null, session: null, refresh }
      }
    >
      {children}
    </sessionContext.Provider>
  )
}

export const useSession = () => {
  const context = useContext(sessionContext)
  if (context === undefined) throw new Error('useSession must be used within a SessionProvider')
  return context
}
