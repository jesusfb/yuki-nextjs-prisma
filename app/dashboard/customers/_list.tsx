'use client'

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

const headers = ['ID', 'Name', 'Email', 'Role', 'Address', 'Products', 'Orders', 'Actions']

export const List: React.FC<{ q?: string }> = ({ q }) => {
  const [users] = api.user.getUsers.useSuspenseQuery({ q })

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
        {users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headers.length} className="text-center text-muted-foreground">
              No users found
            </TableCell>
          </TableRow>
        ) : (
          users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.numProducts}</TableCell>
              <TableCell>{user.numCarts}</TableCell>
              <TableCell>
                <DeleteBtn id={user.id} />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
