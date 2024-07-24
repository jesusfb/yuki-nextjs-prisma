import Image from 'next/image'

export const About: React.FC = () => (
  <section className="w-full bg-muted">
    <div className="container grid min-h-dvh place-items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Empowering Sustainable Living
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          At Yuki Ecommerce, we&apos;re passionate about providing high-quality, eco-friendly
          products that help our customers live more sustainable lifestyles. Our mission is to make
          it easy for everyone to reduce their environmental impact.
        </p>
      </div>

      <Image
        src="/logo.svg"
        width="550"
        height="310"
        alt="About Us"
        className="mx-auto aspect-square overflow-hidden rounded-xl object-contain object-center dark:invert sm:w-full"
      />
    </div>
  </section>
)
