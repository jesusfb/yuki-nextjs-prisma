'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import * as table from '@/components/ui/table'

import type { Query } from '@/server/api/validators/utils'
import { api } from '@/lib/trpc/react'

export const ProductList: React.FC<Query> = (props) => {
  const { data, isLoading } = api.product.getAll.useQuery(props)

  return (
    <table.Root>
      <table.Header>
        <table.Row>
          {headers.map((header) => (
            <table.Head key={header}>{header}</table.Head>
          ))}
        </table.Row>
      </table.Header>

      <table.Body>
        {!isLoading && data ? (
          data.map((product) => (
            <table.Row key={product.id}>
              <table.Cell>{product.id}</table.Cell>
              <table.Cell>{product.name}</table.Cell>
              <table.Cell>{product.category.name}</table.Cell>
              <table.Cell>{product.price}</table.Cell>
              <table.Cell>{product.stock}</table.Cell>
              <table.Cell>{product.owner.name}</table.Cell>
              <table.Cell>{product.createdAt.toDateString()}</table.Cell>
              <table.Cell className="flex gap-2">
                <Button size="sm" asChild>
                  <Link href={`/dashboard/edit-product/${product.id}`}>Edit</Link>
                </Button>
                <Button variant="destructive" size="sm" asChild>
                  <Link href={`/dashboard/delete-product/${product.id}`}>Delete</Link>
                </Button>
              </table.Cell>
            </table.Row>
          ))
        ) : (
          <table.Row>
            <table.Cell colSpan={headers.length} className="text-center text-muted-foreground">
              Loading...
            </table.Cell>
          </table.Row>
        )}
      </table.Body>
    </table.Root>
  )
}

const headers = ['ID', 'Name', 'Category', 'Price', 'Stock', 'Owner', 'Created At', 'Actions']
