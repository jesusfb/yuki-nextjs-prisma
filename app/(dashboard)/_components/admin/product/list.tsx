import type { Product } from '@prisma/client'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import * as table from '@/components/ui/table'

export const ProductList: React.FC<Props> = ({ products }) => (
  <table.Table>
    <table.TableHeader>
      <table.TableRow>
        {headers.map((header) => (
          <table.TableHead key={header}>{header}</table.TableHead>
        ))}
      </table.TableRow>
    </table.TableHeader>

    <table.TableBody>
      {products.map((product) => (
        <table.TableRow key={product.id}>
          <table.TableCell>{product.id}</table.TableCell>
          <table.TableCell>{product.name}</table.TableCell>
          <table.TableCell>{product.category.name}</table.TableCell>
          <table.TableCell>{product.price}</table.TableCell>
          <table.TableCell>{product.stock}</table.TableCell>
          <table.TableCell>{product.owner.name}</table.TableCell>
          <table.TableCell>{product.createdAt.toDateString()}</table.TableCell>
          <table.TableCell className="flex gap-2">
            <Button size="sm" asChild>
              <Link href={`/dashboard/product/${product.id}/edit`}>Edit</Link>
            </Button>
            <Button variant="destructive" size="sm" asChild>
              <Link href={`/dashboard/product/${product.id}/delete`}>Delete</Link>
            </Button>
          </table.TableCell>
        </table.TableRow>
      ))}
    </table.TableBody>
  </table.Table>
)

const headers = ['ID', 'Name', 'Category', 'Price', 'Stock', 'Owner', 'Created At', 'Actions']

interface Props {
  products: Array<Product & { category: { name: string }; owner: { name: string } }>
}
