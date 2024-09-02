'use client'

import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import * as table from '@/components/ui/table'
import { api } from '@/lib/trpc/react'
import { DeleteBtn } from './delete-btn'

const headers = ['ID', 'Name', 'Number of Products', 'Created By', 'Actions']

export const List: React.FC<{ q?: string }> = ({ q }) => {
  const [categories] = api.category.getCategories.useSuspenseQuery({ q })

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
        {categories.length === 0 ? (
          <table.TableRow>
            <table.TableCell colSpan={headers.length} className="text-center text-muted-foreground">
              No categories found.
            </table.TableCell>
          </table.TableRow>
        ) : (
          categories.map((category) => (
            <table.TableRow key={category.id}>
              <table.TableCell>{category.id}</table.TableCell>
              <table.TableCell>{category.name}</table.TableCell>
              <table.TableCell>{category.numberOfProducts}</table.TableCell>
              <table.TableCell>{category.createdBy.name}</table.TableCell>
              <table.TableCell className="grid grid-cols-2 gap-2">
                <Link
                  href={`/dashboard/categories/${category.id}`}
                  className={buttonVariants({ size: 'sm' })}
                >
                  Edit
                </Link>
                <DeleteBtn id={category.id} />
              </table.TableCell>
            </table.TableRow>
          ))
        )}
      </table.TableBody>
    </table.Table>
  )
}
