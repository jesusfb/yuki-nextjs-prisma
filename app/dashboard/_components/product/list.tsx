'use client'

import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import * as table from '@/components/ui/table'
import { api } from '@/lib/trpc/react'
import { DeleteBtn } from './delete-btn'

const headers = ['ID', 'Name', 'Category', 'Price', 'Stock', 'Sold', 'Created By', 'Actions']

export const List: React.FC<{ q?: string }> = ({ q }) => {
  const [products] = api.product.getAdminProducts.useSuspenseQuery({ q })

  return (
    <table.Table>
      <table.TableHeader>
        <table.TableRow>
          {headers.map((header, index) => (
            <table.TableHead key={index}>{header}</table.TableHead>
          ))}
        </table.TableRow>
      </table.TableHeader>

      <table.TableBody>
        {products.length === 0 ? (
          <table.TableRow>
            <table.TableCell colSpan={headers.length} className="text-center text-muted-foreground">
              No products found.
            </table.TableCell>
          </table.TableRow>
        ) : (
          products.map((product) => (
            <table.TableRow key={product.id}>
              <table.TableCell>{product.id}</table.TableCell>
              <table.TableCell>{product.name}</table.TableCell>
              <table.TableCell>{product.category.name}</table.TableCell>
              <table.TableCell>{product.price}</table.TableCell>
              <table.TableCell>{product.stock}</table.TableCell>
              <table.TableCell>{product.sold}</table.TableCell>
              <table.TableCell>{product.createdBy.name}</table.TableCell>
              <table.TableCell className="grid grid-cols-2 gap-2">
                <Link
                  href={`/dashboard/products/${product.id}`}
                  className={buttonVariants({ size: 'sm' })}
                >
                  Edit
                </Link>
                <DeleteBtn id={product.id} />
              </table.TableCell>
            </table.TableRow>
          ))
        )}
      </table.TableBody>
    </table.Table>
  )
}
