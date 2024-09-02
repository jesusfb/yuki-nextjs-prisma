import { CardDescription, CardTitle } from '@/components/ui/card'
import { createSlug } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  shop: {
    id: string
    name: string
    image: string
    _count: {
      products: number
      followers: number
      following: number
    }
  }
}

export const ShopCard: React.FC<Props> = ({ shop }) => (
  <Link
    href={`/u/${createSlug({ str: shop.name, suffix: shop.id })}`}
    className="mt-4 flex w-full items-center gap-4 rounded-lg border p-4 shadow-lg"
  >
    <Image
      src={shop.image}
      alt={shop.name}
      width={64}
      height={64}
      className="rounded-full object-cover"
    />

    <div className="flex flex-col gap-2">
      <CardTitle>{shop.name}</CardTitle>
      <CardDescription>{shop._count.products} products</CardDescription>
    </div>

    <div className="flex flex-col gap-2">
      <CardDescription>{shop._count.followers} followers</CardDescription>
      <CardDescription>{shop._count.following} following</CardDescription>
    </div>
  </Link>
)
