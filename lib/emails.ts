'use server'

import { env } from '@/env'
import { getBaseUrl, siteConfig } from '@/lib/site'

interface Args {
  to: string
  name?: string
  subject: string
  type: keyof typeof template
  data?: Record<string, string>
}

export const sendEmail = async (args: Args) => {
  const message = template[args.type]({ name: args.name, email: args.to, data: args.data })

  if (!env.EMAIL_API) return

  const res = await fetch(env.EMAIL_API, {
    method: 'POST',
    body: JSON.stringify({
      from: siteConfig.meta.applicationName,
      to: args.to,
      reply_to: siteConfig.email,
      subject: args.subject,
      message,
      api_key: env.API_KEY!,
    }),
  })
  const json = (await res.json()) as {
    message: string
    error: Record<string, string>
  }

  return json
}

const template = {
  welcome: ({ name }: { name?: string }) => `
  ## Hi ${name}! 👋

  We're excited to have you on board! 🎉

  If you have any questions or need help, feel free to reach out to us at ${siteConfig.email}.

  Thanks for joining us! 🚀
`,

  'reset-password': ({ email, data }: { email: string; data?: Record<string, string> }) => `
  ## Hi ${data?.name}! 👋

  You're receiving this email because you requested a password reset for your account.

  Click the link below to reset your password: ${getBaseUrl()}/forgot-password/reset?email=${email}&token=${data?.token}

  If you didn't request a password reset, you can safely ignore this email.
`,
  contact: ({ data }: { data?: Record<string, string> }) => data?.message ?? '',
  deleteAccount: ({ name }: { name?: string }) => `
  ## Hi ${name}! 👋

  Your account has been successfully deleted.

  Sorry to see you go! If you have any feedback, feel free to reach out to us at ${siteConfig.email}.

  Thanks for being with us! 🙏
`,
}
