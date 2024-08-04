import type { NextPage } from 'next'

import { contact } from '@/lib/data'
import { getBaseUrl } from '@/lib/site'
import { Form } from './_form'

export const metadata = {
  title: 'Contact Us',
  description: contact.description,
  openGraph: {
    images: [`/og?title=Contact%20Us&desc=${contact.description}`],
    url: `${getBaseUrl()}/contact`,
  },
  alternates: { canonical: `${getBaseUrl()}/contact` },
}

const Page: NextPage = () => (
  <main className="flex min-h-dvh flex-col items-center justify-center">
    <div className="container grid gap-12 md:grid-cols-2">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-muted-foreground">
            Get in touch with our team for any inquiries or support.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-muted-foreground">{contact.address}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <p className="text-muted-foreground">
              {contact.hours.map((hour) => (
                <>
                  {hour} <br />
                </>
              ))}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-1">
              <p className="text-muted-foreground">
                Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </p>
              <p className="text-muted-foreground">
                Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Send Us a Message</h2>
          <p className="text-muted-foreground">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <Form />
      </div>
    </div>
  </main>
)

export default Page
