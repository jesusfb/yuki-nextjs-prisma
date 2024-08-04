import type { NextPage } from 'next'

import { policy } from '@/lib/data'
import { getBaseUrl } from '@/lib/site'

export const metadata = {
  title: 'Privacy Policy',
  description: policy.desciption,
  openGraph: {
    images: [`/og?title=Privacy%20Policy&desc=${policy.desciption}`],
    url: `${getBaseUrl()}/policy`,
  },
  alternates: { canonical: `${getBaseUrl()}/policy` },
}

const Page: NextPage = () => (
  <>
    <header className="container bg-muted py-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {policy.title}
      </h1>
    </header>

    <main className="container flex-1 space-y-12 py-12">
      {policy.content.map((policy) => (
        <section key={policy.title}>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">{policy.title}</h2>
          <div className="space-y-2 text-muted-foreground">
            {policy.content.map((content) => (
              <p key={content}>{content}</p>
            ))}
          </div>
        </section>
      ))}
    </main>
  </>
)

export default Page
