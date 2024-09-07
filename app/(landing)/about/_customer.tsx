import { StarIcon } from 'lucide-react'
import Image from 'next/image'

import { about } from '../_data'

export const Customer: React.FC = () => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            What Our Customers Say
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {about.customers.title}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {about.customers.desciption}
          </p>
        </div>
      </div>
      <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        {about.customers.content.map((customer, idx) => (
          <div key={idx} className="flex gap-4">
            <Image
              src="/default.jpg"
              alt="customer"
              width={40}
              height={40}
              className="size-10 rounded-full border dark:invert"
            />
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">{customer.name}</h3>
                <div className="flex items-center gap-0.5 text-primary">
                  {Array.from({ length: customer.rating }, (_, idx) => (
                    <StarIcon key={idx} className="h-5 w-5" />
                  ))}

                  {Array.from({ length: 5 - customer.rating }, (_, idx) => (
                    <StarIcon key={idx} className="h-5 w-5 fill-muted stroke-muted-foreground" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">&quot;{customer.review}&quot;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
