import { type NextPage } from 'next'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { seo } from '@/lib/seo'
import * as data from './_data'

const Page: NextPage = () => (
  <main className="container mx-auto px-4 py-8">
    <Card className="container">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold">Yuki Policies</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="mb-6 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Privacy Policy</h2>
          {data.privacy.map((policy) => (
            <div key={policy.id}>
              <h3 id={policy.id} className="mb-2 text-lg font-semibold">
                {policy.title}{' '}
              </h3>
              <p>{policy.content}</p>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Shipping Policy</h2>
          {data.shipping.map((policy) => (
            <div key={policy.id}>
              <h3 id={policy.id} className="mb-2 text-lg font-semibold">
                {policy.title}
              </h3>
              <p>{policy.content}</p>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Returns and Refunds Policy</h2>
          {data.returns.map((policy) => (
            <div key={policy.id}>
              <h3 id={policy.id} className="mb-2 text-lg font-semibold">
                {policy.title}
              </h3>
              <p>{policy.content}</p>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Security Policy</h2>
          {data.sercurity.map((policy) => (
            <div key={policy.id}>
              <h3 id={policy.id} className="mb-2 text-lg font-semibold">
                {policy.title}
              </h3>
              <p>{policy.content}</p>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Prohibited Items Policy</h2>
          <p>The following categories of items are prohibited from being sold on Yuki:</p>
          <ul className="mt-2 list-disc pl-5">
            <li>Illegal drugs and drug paraphernalia</li>
            <li>Weapons and explosives</li>
            <li>Counterfeit or replica items</li>
            <li>Hazardous materials</li>
            <li>Human remains or body parts</li>
            <li>Stolen goods</li>
            <li>Items that promote hate, violence, or discrimination</li>
          </ul>
          <p className="mt-4">
            This list is not exhaustive, and we reserve the right to remove any listings that we
            deem inappropriate or in violation of our policies.
          </p>
        </section>

        <p className="mt-8 text-sm text-muted-foreground">
          For any questions or concerns regarding our policies, please contact our customer support
          team at support@tiesen.id.vn or call us at (123) 456-7890.
        </p>
      </CardContent>
    </Card>
  </main>
)

export default Page

export const metadata = seo({
  title: 'Policies',
  description: 'Read our privacy, shipping, returns, security, and seller policies.',
  images: [
    '/api/og?title=Policies&desc=Read%20our%20privacy%2C%20shipping%2C%20returns%2C%20security%2C%20and%20seller%20policies.',
  ],
  url: '/home/privacy-policy',
})
