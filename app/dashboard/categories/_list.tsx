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

const headers = ['ID', 'Name', 'Number of Products', 'Created By', 'Actions']

export const List: React.FC = () => {
  const { data: categories, isLoading } = api.category.getCategories.useQuery()

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
        {isLoading && (
          <TableRow>
            <TableCell colSpan={headers.length} className="text-center text-muted-foreground">
              Loading...
            </TableCell>
          </TableRow>
        )}
        {categories?.length === 0 && (
          <TableRow>
            <TableCell colSpan={headers.length} className="text-center text-muted-foreground">
              No categories found.
            </TableCell>
          </TableRow>
        )}

        {categories?.map((category) => (
          <TableRow key={category.id}>
            <TableCell className="max-w-32">{category.id}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>{category.numberOfProducts}</TableCell>
            <TableCell>{category.createdBy}</TableCell>
            <TableCell className="grid grid-cols-2 gap-2">
              <Link
                href={`/dashboard/categories/${category.id}`}
                className={buttonVariants({ size: 'sm' })}
              >
                Edit
              </Link>
              <DeleteBtn id={category.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
