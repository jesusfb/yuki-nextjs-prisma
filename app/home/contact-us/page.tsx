import { type NextPage } from 'next'

import * as card from '@/components/ui/card'
import { ContactForm } from './_components/contact-form'
import { ContactInfo } from './_components/contact-info'

import { seo } from '@/lib/seo'

const Page: NextPage = () => (
  <main className="container py-8">
    <h1 className="mb-8 text-center text-4xl font-bold">Contact Us</h1>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <card.Card>
        <card.CardHeader>
          <card.CardTitle>Send Us a Message</card.CardTitle>
          <card.CardDescription>
            We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you
            as soon as possible.
          </card.CardDescription>
        </card.CardHeader>

        <ContactForm />
      </card.Card>

      <ContactInfo />
    </div>
  </main>
)

export default Page

export const metadata = seo({
  title: 'Contact Us',
  description:
    "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
  images: [
    '/api/og?title=Contact%20Us&desc=We%27d%20love%20to%20hear%20from%20you.%20Fill%20out%20the%20form%20below%20and%20we%27ll%20get%20back%20to%20you%20as%20soon%20as%20possible.',
  ],
  url: '/home/contact-us',
})
