'use server'

import { Resend } from 'resend'

import { env } from '@/env'
import { seo } from '@/lib/seo'
import { getBaseUrl } from '@/lib/utils'
import { z } from 'zod'
import EmailTemplate from './template'

const schema = z.object({
  email: z.string().email(),
  subject: z.string().min(1),
  name: z.string().optional(),
  data: z.record(z.string()).optional(),
  type: z.enum(['welcome', 'reset-password', 'contact', 'deleteAccount']),
})

type Args = z.infer<typeof schema>

const resend = new Resend(env.RESEND_KEY)
const replyTo = 'ttien56906@gmail.com'
const from = `${seo({}).applicationName} <no-reply@tiesen.id.vn>`

export const sendEmail = async (args: Args) => {
  try {
    const parsed = schema.parse(args)
    const message = templateMd[parsed.type]({ ...parsed })

    const { error } = await resend.emails.send({
      from,
      replyTo,
      to: parsed.email,
      subject: parsed.subject,
      text: message,
      react: EmailTemplate({ from, replyTo, message, subject: parsed.subject }),
    })

    if (error) throw new Error(error.message)
  } catch (e) {
    if (e instanceof z.ZodError) return { error: e.message }
    if (e instanceof Error) return { error: e.message }
    return { error: 'Failed to send email' }
  }
}

const templateMd = {
  welcome: ({ name }: Args) => `
  ## Hi ${name}! 👋

  We're excited to have you on board! 🎉

  If you have any questions or need help, feel free to reach out to us at ttien56906@gmail.com.

  Thanks for joining us! 🚀
`,

  'reset-password': ({ email, data }: Args) => `
  ## Hi ${data?.name}! 👋

  You're receiving this email because you requested a password reset for your account.

  Click the link below to reset your password: ${getBaseUrl()}/forgot-password/reset?email=${email}&token=${data?.token}

  If you didn't request a password reset, you can safely ignore this email.
`,
  contact: ({ data }: Args) => data?.message ?? '',
  deleteAccount: ({ name }: Args) => `
  ## Hi ${name}! 👋

  Your account has been successfully deleted.

  Sorry to see you go! If you have any feedback, feel free to reach out to us at ttien56906@gmail.com.

  Thanks for being with us! 🙏
`,
}
