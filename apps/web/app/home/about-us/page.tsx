import type { NextPage } from 'next'

import { Button } from '@yuki/ui/button'
import * as card from '@yuki/ui/card'

import { seo } from '@/lib/seo'
import { techStacks } from './_data'

const Page: NextPage = () => (
  <main className="container py-8">
    <h1 className="mb-8 text-center text-4xl font-bold">About Yuki</h1>

    <div className="mx-auto space-y-8">
      <card.Card>
        <card.CardHeader>
          <card.CardTitle>Welcome to Yuki</card.CardTitle>
          <card.CardDescription>Your Ultimate E-Commerce Experience</card.CardDescription>
        </card.CardHeader>
        <card.CardContent>
          <p className="text-muted-foreground">
            Yuki is a cutting-edge, full-stack e-commerce platform designed to provide a seamless
            shopping experience. Built with the latest technologies, Yuki offers robust features,
            lightning-fast performance, and top-notch security.
          </p>
        </card.CardContent>
      </card.Card>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Our Tech Stack</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {techStacks.map((tech) => (
          <TechCard key={tech.title} {...tech} />
        ))}
      </div>

      <card.Card className="mt-8">
        <card.CardHeader>
          <card.CardTitle>Join the Yuki Community</card.CardTitle>
        </card.CardHeader>
        <card.CardContent>
          <p className="mb-4 text-muted-foreground">
            We&apos;re always looking to improve and expand Yuki. Whether you&apos;re a shopper,
            seller, or developer, we&apos;d love to hear from you!
          </p>
          <Button asChild>
            <a href="https://tiesen.id.vn" target="_blank" rel="noopener noreferrer">
              Get in Touch
            </a>
          </Button>
        </card.CardContent>
      </card.Card>
    </div>
  </main>
)

export default Page

export const metadata = seo({
  title: 'About Us',
  description: 'Learn more about Yuki, the ultimate e-commerce platform.',
  images: [
    '/api/og?title=About%20Us&description=Learn%20more%20about%20Yuki%2C%20the%20ultimate%20e-commerce%20platform.',
  ],
  url: '/home/about-us',
})

interface TechCardProps {
  title: string
  href: string
  description: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const TechCard: React.FC<TechCardProps> = ({ href, title, description, Icon }) => (
  <card.Card isPressable asChild>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <card.CardHeader>
        <card.CardTitle className="flex items-center gap-2">
          <Icon className="h-6 w-6" />
          {title}
        </card.CardTitle>
      </card.CardHeader>
      <card.CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </card.CardContent>
    </a>
  </card.Card>
)
