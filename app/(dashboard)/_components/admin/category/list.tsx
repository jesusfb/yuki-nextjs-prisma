'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import * as table from '@/components/ui/table'

import type { Query } from '@/server/api/validators/utils'
import { api } from '@/lib/trpc/react'

export const CategoryList: React.FC<Query> = (props) => {
  const { data, isLoading } = api.category.getAll.useQuery(props)

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
              <table.Cell>{product._count.products}</table.Cell>
              <table.Cell>{product.createdAt.toDateString()}</table.Cell>
              <table.Cell className="flex gap-2">
                <Button size="sm" asChild>
                  <Link href={`/dashboard/category/${product.id}/edit`}>Edit</Link>
                </Button>
                <Button variant="destructive" size="sm" asChild>
                  <Link href={`/dashboard/category/${product.id}/delete`}>Delete</Link>
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

const headers = ['ID', 'Name', 'Products', 'Created At', 'Actions']
