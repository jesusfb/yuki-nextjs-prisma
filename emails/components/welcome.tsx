import { Text } from '@react-email/components'

import type { EmailProps } from '@/emails/config'
import { EmailLayout } from '@/emails/components/_layout'
import { hello } from '@/emails/config'

const Welcome: React.FC<EmailProps> = ({
  subject = 'Welcome to our platform!',
  preview = 'You have successfully created an account',
  data = { name: 'Yuki' },
}) => (
  <EmailLayout preview={preview} subject={subject}>
    <Text>{hello(data.name)}</Text>
    <Text>Welcome to Yuki! We&apos;re excited to have you on board. 🎉</Text>
    <Text>
      If you have any questions or need help, feel free to send us an email. We will get back to you
      as soon as possible.
    </Text>
    <Text>Thanks for joining us! 🚀</Text>
  </EmailLayout>
)

export default Welcome
