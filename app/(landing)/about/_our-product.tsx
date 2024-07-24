import { LeafIcon, RecycleIcon, TruckIcon } from 'lucide-react'

export const OurProduct: React.FC = () => {
  const featureList = [
    {
      icon: LeafIcon,
      title: 'Eco-Friendly Materials',
      description:
        'All of our products are made from sustainable, natural materials that are gentle on the environment.',
    },
    {
      icon: RecycleIcon,
      title: 'Responsible Sourcing',
      description:
        'We work closely with our suppliers to ensure ethical and sustainable sourcing practices.',
    },
    {
      icon: TruckIcon,
      title: 'Efficient Logistics',
      description:
        'Our streamlined logistics and distribution network minimize our carbon footprint.',
    },
  ]

  return (
    <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Products</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Sustainable Solutions for Every Home
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our product range includes a wide variety of eco-friendly home goods, apparel, and
            lifestyle products that are designed to reduce waste and promote sustainable living.
            From reusable water bottles to organic cotton t-shirts, we have something for everyone.
          </p>
        </div>

        <div className="grid gap-6">
          {featureList.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="rounded-full bg-primary p-2 text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
