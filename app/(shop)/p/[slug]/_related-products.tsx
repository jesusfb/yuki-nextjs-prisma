import { ProductCard } from '@/components/product-card'
import { Marquee } from '@/components/ui/marquee'

interface Props {
  products:
    | {
        id: string
        name: string
        image: string
        price: number
      }[]
    | null
}

export const RelatedProducts: React.FC<Props> = ({ products }) => (
  <section className="mt-8">
    <h2 className="text-3xl font-bold">Related Products</h2>

    {products ? (
      <Marquee>
        {products.map((relatedProduct) => (
          <ProductCard key={relatedProduct.id} product={relatedProduct} className="size-80" />
        ))}
      </Marquee>
    ) : (
      <p className="text-lg text-muted-foreground">No related products found :((</p>
    )}
  </section>
)
