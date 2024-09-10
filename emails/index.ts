'use server'

import { Resend } from 'resend'

import * as email from '@/emails/components'
import { replyTo, type EmailProps } from '@/emails/config'
import { env } from '@/env'

const resend = new Resend(env.RESEND_KEY)

interface Params extends EmailProps {
  type: keyof typeof email
  email: string
}

export const sendEmail = async (params: Params) => {
  const Comp = email[params.type](params)

  const res = await resend.emails.send({
    from: 'Yuki <no-reply@tiesen.id.vn>',
    to: params.email,
    replyTo: params.replyTo ?? replyTo,
    subject: params.subject ?? 'You have a new message!',
    text: params.preview,
    react: Comp,
  })

  if (res.error) return { message: '', error: res.error.message }
  return { message: 'Email sent successfully!', error: '' }
}
