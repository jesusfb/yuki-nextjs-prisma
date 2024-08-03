'use server'

import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

export const setCookie = async ({
  name,
  value,
  attributes,
}: {
  name: string
  value: string
  attributes?: Partial<ResponseCookie>
}) => {
  cookies().set(name, value, attributes)
}
