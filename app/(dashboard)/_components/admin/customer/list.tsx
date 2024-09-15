'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import * as table from '@/components/ui/table'

import type { Query } from '@/server/api/validators/utils'
import { api } from '@/lib/trpc/react'
import { UpdateRole } from './update-role'

export const CustomersList: React.FC<Query> = ({ q, page, limit }) => {
  const { data, isLoading } = api.user.getAll.useQuery({ q, page, limit })

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
          data.map((customer) => (
            <table.Row key={customer.id}>
              <table.Cell>{customer.id}</table.Cell>
              <table.Cell>{customer.name}</table.Cell>
              <table.Cell>{customer.email}</table.Cell>
              <UpdateRole userId={customer.id} currentRole={customer.role} />
              <table.Cell>{customer.createdAt.toDateString()}</table.Cell>
              <table.Cell className="flex gap-2">
                <Button size="sm" asChild>
                  <Link href={`/dashboard/user/${customer.id}/edit`}>Edit</Link>
                </Button>
                <Button variant="destructive" size="sm" asChild>
                  <Link href={`/dashboard/user/${customer.id}/delete`}>Delete</Link>
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

const headers = ['ID', 'Name', 'Email', 'Role', 'Created At', 'Actions']
