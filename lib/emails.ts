import { env } from '@/env'
import { siteConfig } from '@/lib/site'

interface Args {
  to: string
  name?: string
  subject: string
  type: keyof typeof template
}

export const sendEmail = async (args: Args) => {
  const message = template[args.type]({ name: args.name })

  if (env.EMAIL_API)
    await fetch(env.EMAIL_API, {
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
}

const template = {
  welcome: ({ name }: { name?: string }) => `
  ## Hi ${name}! 👋

  We're excited to have you on board! 🎉

  If you have any questions or need help, feel free to reach out to us at ${siteConfig.email}.

  Thanks for joining us! 🚀
`,
}
