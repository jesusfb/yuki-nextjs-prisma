import 'server-only'

import { cookies } from 'next/headers'
import { cache } from 'react'

import type { Session, User } from '@prisma/client'
import { lucia } from '@/server/auth/lucia'

type Auth = null | (Session & { user: User })

const uncachedAuth = async (): Promise<Auth> => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
  if (!sessionId) return null

  const result = await lucia.validateSession(sessionId)

  try {
    if (result.session?.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id)
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie()
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    }
  } catch {}

  if (!result.session || !result.user) return null
  return { ...result.session, user: result.user }
}

export const auth = cache(uncachedAuth)
