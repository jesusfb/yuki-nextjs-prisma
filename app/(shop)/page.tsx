import type { NextPage } from 'next'
import Image from 'next/image'

import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'

import { api } from '@/lib/trpc/server'
import { cn } from '@/lib/utils'

const Page: NextPage = async () => {
  const threeProducts = await api.product.getAll({ limit: 3 })

  return (
    <div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        {threeProducts.map((product, idx) => (
          <Card
            key={product.id}
            className={cn('aspect-square', idx === 0 ? 'col-span-2 row-span-2' : '')}
            isPressable
            asChild
          >
            <li>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full dark:invert object-cover aspect-square"
              />
              <CardFooter className="flex-col absolute bottom-4 left-4 bg-primary/70 p-4 rounded-lg">
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardFooter>
            </li>
          </Card>
        ))}
      </ul>
    </div>
  )
}

export default Page
