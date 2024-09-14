import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CreditCard, RotateCcw, ShoppingCart, Truck } from 'lucide-react'

import { Button } from '@/components/ui/button'

const Page: NextPage = () => (
  <main className="flex-1">
    <section className="w-full py-12 md:py-24 grid place-items-center lg:py-32 xl:py-48 min-h-dvh">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Yuki Store
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover amazing products at unbeatable prices. Shop now and experience the
              difference!
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r text-white from-blue-600 to-purple-600" asChild>
              <Link href="/">Shop Now</Link>
            </Button>
            <Button variant="outline">
              <Link href="/home/about-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Our Features
        </h2>
        <div className="grid gap-6 items-center md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
            <ShoppingCart className="h-10 w-10 text-blue-600" />
            <h3 className="text-xl font-bold">Wide Selection</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Thousands of products to choose from
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
            <Truck className="h-10 w-10 text-blue-600" />
            <h3 className="text-xl font-bold">Fast Delivery</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Get your items delivered quickly
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
            <CreditCard className="h-10 w-10 text-blue-600" />
            <h3 className="text-xl font-bold">Secure Payments</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Your transactions are always safe
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
            <RotateCcw className="h-10 w-10 text-blue-600" />
            <h3 className="text-xl font-bold">Easy Returns</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Hassle-free return policy
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Hero product"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square dark:invert"
            height="550"
            src="/logo.svg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Experience Shopping Like Never Before
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our e-commerce platform offers a seamless shopping experience with a user-friendly
                interface, personalized recommendations, and exclusive deals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" asChild>
                <Link href="/">Start Shopping</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/c">View Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default Page
