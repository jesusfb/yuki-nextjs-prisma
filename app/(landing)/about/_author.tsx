import Image from 'next/image'

export const Author: React.FC = () => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
      <div>
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Story</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          A Legacy of Sustainability
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Acme Ecommerce was founded in 2010 by a team of passionate environmentalists who saw the
          need for a more sustainable approach to retail. Over the years, we&apos;ve grown to become
          a leading provider of eco-friendly home goods, apparel, and lifestyle products.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="flex items-start gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/101703006?v=4"
            alt="Tiesen"
            width={48}
            height={48}
            className="rounded-full border"
          />

          <div className="grid gap-1">
            <h3 className="text-lg font-semibold">Tiesen</h3>
            <p className="text-muted-foreground">Co-Founder &amp; CEO</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
