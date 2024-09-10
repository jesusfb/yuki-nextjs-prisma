import * as email from '@react-email/components'

import { type EmailProps, font, replyTo as rt, tailwindConfig } from '@/emails/config'

const logo =
  'https://raw.githubusercontent.com/tiesen243/portfolio/main/public/android-chrome-512x512.png'
const logoText =
  'https://raw.githubusercontent.com/tiesen243/portfolio/main/public/images/tiesen.png'

export const EmailLayout: React.FC<EmailProps> = ({ preview, subject, replyTo = rt, children }) => (
  <email.Html lang="en">
    <email.Head>
      <email.Font {...font} />
      <email.Preview>{preview}</email.Preview>
    </email.Head>

    <email.Tailwind config={tailwindConfig}>
      <email.Body className="border-border bg-background font-sans text-foreground antialiased">
        <email.Container className="mx-auto px-4">
          <email.Section className="my-4 space-y-4">
            <email.Img src={logo} alt="logo" className="mx-auto h-16 w-16 object-cover" />
            <email.Heading className="text-center">{subject}</email.Heading>
          </email.Section>

          <email.Section>
            {children}

            <email.Text>
              Best Regards, <br />
              Yuki
            </email.Text>
          </email.Section>

          <email.Hr className="border-border" />

          <email.Section>
            <email.Text>
              Website: <email.Link href="https://tiesen.id.vn">tiesen.id.vn</email.Link>
              <br />
              Email: <email.Link href={`mailto:${replyTo}`}>{replyTo}</email.Link>
              <br />
              Address: Saigon, Vietnam
            </email.Text>

            <email.Img src={logoText} alt="Tiesen" className="my-4 h-auto w-52" />
          </email.Section>
        </email.Container>
      </email.Body>
    </email.Tailwind>
  </email.Html>
)
