import { Heading, Text } from '@react-email/components'

import { EmailLayout } from '@/emails/components/_layout'
import { type EmailProps } from '@/emails/config'

const Feedback: React.FC<EmailProps> = ({
  preview = 'You have a new message',
  subject = 'Improvement suggestion',
  replyTo,
  data = { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
}) => (
  <EmailLayout preview={preview} subject="You have a new message" replyTo={replyTo}>
    <Heading className="text-2xl">{subject}</Heading>
    <Text>{data.message}</Text>
  </EmailLayout>
)

export default Feedback
