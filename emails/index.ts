'use server'

import { Resend } from 'resend'

import { env } from '@/env'
import EmailTemplate from './template'
import { getBaseUrl } from '@/lib/utils'

const resend = new Resend(env.RESEND_KEY)

interface Params {
  type: keyof typeof emailTypes
  email: string
  data?: Record<string, string>
}

const from = 'Yuki <no-reply@tiesen.id.vn>'
const replyTo = 'ttien56906@gmail.com'

export const sendEmail = async (params: Params) => {
  const preview = `You have received an email from ${from}.`

  const { subject, message } = emailTypes[params.type](params)

  const res = await resend.emails.send({
    from,
    subject,
    replyTo,
    text: message,
    to: params.email,
    react: EmailTemplate({ subject, message, preview, replyTo }),
  })

  if (res.error) throw new Error(res.error.message)
}

const emailTypes = {
  welcome: (params: Params) => {
    return {
      subject: `Welcome to Yuki!`,
      message: `
      ## Hello, ${params.data?.name}! 👋

      Welcome to Yuki! We're excited to have you on board. 🎉

      If you have any questions or need help, feel free to reach out to us at ${replyTo}.

      Thanks for joining us! 🚀
      `,
    }
  },
  resetPassword: (params: Params) => {
    return {
      subject: `Reset password`,
      message: `
        ## Hello, ${params.data?.name}! 👋

        We received a request to reset your password. If you didn't make this request, you can safely ignore this email.

        To reset your password, click on the link below:

        [Reset password](${getBaseUrl()}/forgot-password/reset?token=${params.data?.token})

        If you have any questions or need help, feel free to reach out to us at ${replyTo}.

        Thanks for using Yuki! 🚀
      `,
    }
  },
  deleteAccount: (params: Params) => {
    return {
      subject: `Delete account`,
      message: `
        ## Hello, ${params.data?.name}! 👋

        Your account has been deleted. If you didn't make this request, please contact us immediately.

        Sorry to see you go! If you have any feedback, we'd love to hear it.

        Thanks for being with us! 🙏
      `,
    }
  },
  contact: (params: Params) => ({
    subject: `Contact`,
    message: params.data?.message ?? '',
  }),
}
