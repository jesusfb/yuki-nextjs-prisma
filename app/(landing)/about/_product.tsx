import { about } from '@/lib/data'

export const Product: React.FC = () => (
  <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
    <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
      <div>
        <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Our Products</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {about.products.title}
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {about.products.desciption}
        </p>
      </div>

      <div className="grid gap-6">
        {about.products.features.map((feature) => (
          <div key={feature.name} className="flex items-start gap-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <feature.icon className="h-6 w-6" />
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-semibold">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
