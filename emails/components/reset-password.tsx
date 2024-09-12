import { Heading, Link, Text } from '@react-email/components'

import { EmailLayout } from '@/emails/components/_layout'
import { hello, type EmailProps } from '@/emails/config'

const ResetPassword: React.FC<EmailProps> = ({
  subject = 'Reset your password',
  preview = 'You have requested to reset your password',
  data = { name: 'Yuki', link: '#' },
}) => (
  <EmailLayout preview={preview} subject={subject}>
    <Text>{hello(data.name)}</Text>
    <Text>
      We received a request to reset your password. If you didn&apos;t make this request, you can
      safely ignore this email.
    </Text>
    <Text>To reset your password, click on the link below:</Text>
    <Link href={data.link}>Reset password</Link>

    <Text>
      If you have any questions or need help, feel free to send us an email. We will get back to you
      as soon as possible.
    </Text>

    <Text>Thanks for using Yuki! 🚀</Text>
  </EmailLayout>
)

export default ResetPassword
