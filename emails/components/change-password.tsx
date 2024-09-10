import { type EmailProps } from '@/emails/config'
import { EmailLayout } from '@/emails/components/_layout'
import { Heading, Text } from '@react-email/components'

const ChangePassword: React.FC<EmailProps> = ({
  subject = 'Your password has been changed',
  preview = 'You have successfully changed your password',
  data = { name: 'Yuki' },
}) => (
  <EmailLayout subject={subject} preview={preview}>
    <Heading className="text-2xl">Hello, {data.name}! 👋</Heading>
    <Text>We just wanted to let you know that your password has been successfully changed.</Text>
    <Text>
      If you did not make this change, please contact us immediately. We will investigate the issue
      and get back to you as soon as possible.
    </Text>
  </EmailLayout>
)

export default ChangePassword
