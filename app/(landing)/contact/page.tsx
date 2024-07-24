import type { NextPage } from 'next'

import { siteConfig } from '@/lib/site'
import { Form } from './_form'

const Page: NextPage = () => (
  <>
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
            <p className="text-muted-foreground">123 Main St, Anytown USA 12345</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <p className="text-muted-foreground">
              Monday - Friday: 9am - 5pm
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-1">
              <p className="text-muted-foreground">
                Phone: <a href="#">+1 (234) 567-890</a>
              </p>
              <p className="text-muted-foreground">
                Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
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
  </>
)

export default Page
