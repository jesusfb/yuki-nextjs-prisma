'use server'

import { cookies } from 'next/headers'

import { lucia } from '@yuki/auth/lucia'

import { getBaseUrl } from '@/lib/utils'

export const signOut = async (formData: FormData) => {
  const sessionId = String(formData.get('sessionId'))
  await lucia.invalidateSession(sessionId)
  const sessionCookie = lucia.createBlankSessionCookie()
  cookies().set(sessionCookie.name, sessionCookie.value, {
    ...sessionCookie.attributes,
    domain: new URL(getBaseUrl()).hostname.replace(/^.*?\.(.*)/, '$1'),
  })
}
