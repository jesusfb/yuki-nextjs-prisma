import Link from 'next/link'

import { CardDescription, CardTitle } from '@/components/ui/card'
import { createSlug } from '@/lib/utils'

interface Props {
  product: {
    name: string
    price: number
    category: {
      name: string
      id: string
    }
    description: string
    stock: number
  }
}

export const Info: React.FC<Props> = ({ product }) => (
  <div className="space-y-4">
    <CardTitle className="text-4xl">{product.name}</CardTitle>

    <p className="w-fit rounded-full bg-primary px-3 py-1 text-lg text-primary-foreground">
      $ {product.price}
    </p>

    <CardDescription className="text-lg">
      <b className="text-foreground">Category:</b>{' '}
      <Link
        className="hover:text-foreground hover:underline"
        href={`/shop/c/${createSlug({ str: product.category.name, suffix: product.category.id })}`}
      >
        {product.category.name}
      </Link>
    </CardDescription>

    <CardDescription className="text-lg">
      <b className="text-foreground">
        Description: <br />
      </b>

      <span dangerouslySetInnerHTML={{ __html: product.description.replace(/\\n/g, '<br />') }} />
    </CardDescription>

    <CardDescription className="text-lg">
      <b className="text-foreground">Stock:</b> {product.stock}
    </CardDescription>
  </div>
)
