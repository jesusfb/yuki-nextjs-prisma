'use server'

import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

import { env } from '@/env'

export const setCookie = async ({
  name,
  value,
  attributes,
}: {
  name: string
  value: string
  attributes?: Partial<ResponseCookie>
}) => {
  cookies().set(name, value, {
    ...attributes,
    ...(env.DOMAIN ? { domain: env.DOMAIN } : {}),
  })
}
