import { StarIcon } from 'lucide-react'
import Image from 'next/image'

export const Customer: React.FC = () => {
  const customers = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      review:
        "I've been using Yuki Ecommerce products for years and I'm always impressed by the quality and sustainability. Their reusable water bottles are a game-changer!",
    },
    {
      name: 'Alex Smith',
      rating: 4,
      review:
        "I'm really impressed with Yuki Ecommerce's commitment to sustainability. Their organic cotton t-shirts are not only comfortable, but they're also helping reduce my carbon footprint.",
    },
    {
      name: 'Emily Parker',
      rating: 3,
      review:
        "I love the wide range of eco-friendly products Yuki Ecommerce offers. Their reusable grocery bags have been a game-changer in my daily life, and I'm glad to support a company that's making a difference.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              What Our Customers Say
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Hear from Our Satisfied Customers
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our customers love the quality and sustainability of our products. Here&apos;s what
              they have to say.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {customers.map((customer, idx) => (
            <div key={idx} className="flex gap-4">
              <Image
                src="/placeholder-user.jpg"
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
}
