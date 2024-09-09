import { getBaseUrl } from '@/lib/utils'
import * as comp from '@react-email/components'

interface EmailProps {
  preview: string
  subject: string
  message: string
  replyTo: string
}

const config: comp.TailwindConfig = {
  theme: {
    fontFamily: { sans: ['Inter', 'sans-serif'] },
    colors: {
      background: 'hsl(240 10% 3.9%)',
      foreground: 'hsl(0 0% 98%)',
      border: 'hsl(240 3.7% 15.9%)',
    },
  },
}

const EmailTemplate: React.FC<EmailProps> = ({ preview, subject, message, replyTo }) => (
  <comp.Html lang="en">
    <comp.Head>
      <comp.Font
        fontFamily="Inter"
        fallbackFontFamily="sans-serif"
        webFont={{
          url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </comp.Head>

    <comp.Preview>{preview}</comp.Preview>

    <comp.Tailwind config={config}>
      <comp.Body className="border-border bg-background font-sans text-foreground antialiased">
        <comp.Container className="mx-auto px-2">
          <comp.Section>
            <comp.Img
              src={`${getBaseUrl()}/android-chrome-512x512.png`}
              alt="logo"
              className="mx-auto my-4 h-16 w-16"
            />
            <comp.Heading className="text-center">{subject}</comp.Heading>
          </comp.Section>

          <comp.Markdown>{message}</comp.Markdown>

          <comp.Text>
            Best Regards, <br />
            Yuki
          </comp.Text>

          <hr className="border-border" />
          <comp.Section>
            <comp.Text>
              Website: <comp.Link href="https://tiesen.id.vn">tiesen.id.vn</comp.Link>
              <br />
              Email: <comp.Link href={`mailto:${replyTo}`}>{replyTo}</comp.Link>
              <br />
              Address: Saigon, Vietnam
            </comp.Text>

            <comp.Img
              src="https://raw.githubusercontent.com/tiesen243/portfolio/main/public/images/tiesen.png"
              alt="Tiesen"
              className="my-4 h-auto w-52"
            />
          </comp.Section>
        </comp.Container>
      </comp.Body>
    </comp.Tailwind>
  </comp.Html>
)

export default EmailTemplate
