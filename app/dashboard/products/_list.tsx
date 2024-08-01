'use client'

import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { api } from '@/lib/trpc/react'
import { DeleteBtn } from './_delete-btn'

const headers = ['ID', 'Name', 'Category', 'Price', 'Stock', 'Sold', 'Created By', 'Actions']

export const List: React.FC = () => {
  const [products] = api.product.getProducts.useSuspenseQuery()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead key={index}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headers.length} className="text-center text-muted-foreground">
              No products found.
            </TableCell>
          </TableRow>
        ) : (
          products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="max-w-32">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.sold}</TableCell>
              <TableCell>{product.createdBy.name}</TableCell>
              <TableCell className="grid grid-cols-2 gap-2">
                <Link
                  href={`/dashboard/products/${product.id}`}
                  className={buttonVariants({ size: 'sm' })}
                >
                  Edit
                </Link>
                <DeleteBtn id={product.id} />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
