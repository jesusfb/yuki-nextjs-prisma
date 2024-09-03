import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Markdown,
  Preview,
  Section,
  Tailwind,
  Text,
  type TailwindConfig,
} from '@react-email/components'

interface EmailProps {
  from: string
  replyTo: string
  subject: string
  message: string
}

const config: TailwindConfig = {
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    colors: {
      background: 'hsl(240 10% 3.9%)',
      foreground: 'hsl(0 0% 98%)',
      border: 'hsl(240 3.7% 15.9%)',
    },
  },
}

export const EmailTemplate: React.FC<Readonly<EmailProps>> = (data) => {
  const previewText = `Message from ${data.replyTo} on ${data.from}`

  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>

      <Tailwind config={config}>
        <Body className="border-border bg-background font-sans text-foreground antialiased">
          <Container className="mx-auto px-2">
            <Section>
              <Img
                src="https://raw.githubusercontent.com/tiesen243/portfolio/main/public/android-chrome-512x512.png"
                alt="logo"
                className="mx-auto my-4 h-16 w-16"
              />
              <Heading className="text-center">{data.subject}</Heading>
            </Section>

            <Markdown
              markdownCustomStyles={{
                h1: { marginTop: 2, marginBottom: 2 },
                h2: { marginTop: 2, marginBottom: 2 },
                h3: { marginTop: 2, marginBottom: 2 },
                h4: { marginTop: 2, marginBottom: 2 },
              }}
              markdownContainerStyles={{
                background: 'hsl(240 10% 3.9%)',
                color: 'hsl(0 0% 98%)',
              }}
            >
              {data.message}
            </Markdown>

            <Text>
              Best Regards, <br />
              {data.from.split(' ').at(0)}
            </Text>

            <hr className="border-border" />
            <Section>
              <Text>
                Website: <Link href="https://tiesen.id.vn/">https://tiesen.id.vn</Link>
                <br />
                Email: <Link href={`mailto:${data.replyTo}`}>{data.replyTo}</Link>
                <br />
                Address: Saigon, Vietnam
              </Text>

              <Img
                src="https://raw.githubusercontent.com/tiesen243/portfolio/main/public/images/tiesen.png"
                alt="Tiesen"
                className="my-4 h-auto w-52"
              />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default EmailTemplate
