import Image from 'next/image'

import { about } from '@/lib/data'

export const Story: React.FC = async () => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
      <div>
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Story</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {about.story.title}
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {about.story.desciption}
        </p>
      </div>
      <div className="grid gap-6">
        {about.story.authors.map((author) => (
          <div className="flex items-start gap-4" key={author.name}>
            <Image
              src={author.avatar}
              alt={author.name}
              width={48}
              height={48}
              className="rounded-full border"
            />

            <div className="grid gap-1">
              <h3 className="text-lg font-semibold">{author.name}</h3>
              <p className="text-muted-foreground">{author.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
