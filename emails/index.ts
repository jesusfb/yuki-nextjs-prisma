'use server'

import { Resend } from 'resend'

import { env } from '@/env'
import { getBaseUrl } from '@/lib/utils'
import EmailTemplate from './template'

const resend = new Resend(env.RESEND_KEY)

interface Params {
  type: keyof typeof emailTypes
  email: string
  from?: string
  replyTo?: string
  data?: Record<string, string>
}

export const sendEmail = async (params: Params) => {
  const from = `${params.from ?? 'Yuki'} <no-reply@tiesen.id.vn>`
  const preview = `You have received an email from ${from}.`
  const replyTo = params.replyTo ?? 'ttien56906@gmail.com'

  const { subject, message } = emailTypes[params.type](params)

  const res = await resend.emails.send({
    from,
    subject,
    replyTo,
    text: message,
    to: params.email,
    react: EmailTemplate({ subject, message, preview, replyTo }),
  })

  if (res.error) return { message: '', error: res.error.message }
  return { message: 'Email sent successfully!', error: '' }
}

const emailTypes = {
  welcome: (params: Params) => {
    return {
      subject: `Welcome to Yuki!`,
      message: `
      ## Hello, ${params.data?.name}! 👋

      Welcome to Yuki! We're excited to have you on board. 🎉

      If you have any questions or need help, feel free to reach out to us at ttien56906@gmail.com.

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

        [Reset password](${getBaseUrl()}/forgot-password/reset?token=${params.data?.token}&email=${params.email})

        If you have any questions or need help, feel free to reach out to us at ttien56906@gmail.com.

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
