import type { NextPage } from 'next'

import { policy } from '@/lib/data'
import { getBaseUrl } from '@/lib/site'

export const metadata = {
  title: policy.title,
  description: policy.desciption,
  openGraph: {
    images: [`/og?title=${policy.title}&desc=${policy.desciption}`],
    url: `${getBaseUrl()}/policy`,
  },
  alternates: { canonical: `${getBaseUrl()}/policy` },
}

const Page: NextPage = () => (
  <>
    <header className="bg-muted px-4 py-6 sm:px-6">
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {policy.title}
        </h1>
      </div>
    </header>

    <main className="flex-1 px-4 py-12 sm:px-6">
      <div className="container space-y-12">
        {policy.content.map((policy) => (
          <section key={policy.title}>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              {policy.title}
            </h2>
            <div className="space-y-2 text-muted-foreground">
              {policy.content.map((content) => (
                <p key={content}>{content}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  </>
)

export default Page
