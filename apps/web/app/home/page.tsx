import type { NextPage } from 'next'

import { Button } from '@yuki/ui/button'
import { Github, Globe } from '@yuki/ui/icons'
import { Typography } from '@yuki/ui/typography'

const Page: NextPage = () => (
  <main className="container flex min-h-dvh max-w-screen-lg flex-col items-center justify-center overflow-x-hidden">
    <div className="pointer-events-none relative flex place-items-center before:absolute before:h-[700px] before:w-[140px] before:translate-x-1 before:translate-y-[-10px] before:rotate-[-32deg] before:rounded-full before:bg-gradient-to-r before:from-[#AB1D1C] before:to-[#E18317] before:opacity-30 before:blur-[100px] before:content-[''] lg:before:h-[700px] lg:before:w-[240px] lg:before:translate-x-[-100px]" />

    <article>
      <Typography
        level="h1"
        className="w-fit bg-[linear-gradient(135deg,#ec4251,69%,#f6991a)] bg-clip-text text-transparent"
      >
        Yuki
      </Typography>

      <Typography level="h2" className="border-none brightness-150">
        A full-stack e-commerce app built with{' '}
        <span className="bg-[linear-gradient(135deg,#EF4444,69%,hsl(var(--background)))] bg-clip-text text-transparent">
          Turborepo
        </span>{' '}
        along with{' '}
        <span className="bg-[linear-gradient(135deg,#e18317,69%,hsl(var(--background)))] bg-clip-text text-transparent">
          Next.js
        </span>{' '}
        and{' '}
        <span className="bg-[linear-gradient(135deg,#2596BE,69%,hsl(var(--background)))] bg-clip-text text-transparent">
          tRPC
        </span>
      </Typography>

      <Typography className="text-lg">
        It is a modern, fast, and secure platform that allows you to create your own e-commerce
        store with ease. Yuki is built with the latest technologies and best practices to ensure
        that your store is fast, secure, and scalable.
      </Typography>
    </article>

    <div className="mt-6 flex items-center gap-8">
      <Button size="sm" asChild>
        <a href="https://tiesen.id.vn" target="_blank" rel="noopener noreferrer">
          <Globe className="mr-2" /> Visit my website
        </a>
      </Button>

      <Button variant="outline" size="sm" asChild>
        <a href="https://github.com/tiesen243/yuki" target="_blank" rel="noopener noreferrer">
          <Github className="mr-2" /> Github
        </a>
      </Button>
    </div>
  </main>
)

export default Page
