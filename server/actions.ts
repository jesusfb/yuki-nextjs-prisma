'use server'

import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

import { auth } from '@/server/auth'
import { lucia } from '@/server/auth/lucia'

export const setCookie = async (p: {
  name: string
  value: string
  attributes: Partial<ResponseCookie>
}) => {
  cookies().set(p.name, p.value, p.attributes)
}

export const signOut = async () => {
  const session = await auth()
  if (!session) return

  await lucia.invalidateSession(session.id)
  const sessionCookie = lucia.createBlankSessionCookie()
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
}
