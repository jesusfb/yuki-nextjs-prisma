'use client'

import * as table from '@/components/ui/table'
import { api } from '@/lib/trpc/react'
import { ChangeRole } from './change-role'
import { DeleteBtn } from './delete-btn'

const headers = ['ID', 'Name', 'Email', 'Role', 'Address', 'Products', 'Orders', 'Actions']

export const List: React.FC<{ q?: string }> = ({ q }) => {
  const [users, { refetch }] = api.user.getUsers.useSuspenseQuery({ q })

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
        {users.length === 0 ? (
          <table.TableRow>
            <table.TableCell colSpan={headers.length} className="text-center text-muted-foreground">
              No users found
            </table.TableCell>
          </table.TableRow>
        ) : (
          users.map((user) => (
            <table.TableRow key={user.id}>
              <table.TableCell>{user.id}</table.TableCell>
              <table.TableCell>{user.name}</table.TableCell>
              <table.TableCell>
                <ChangeRole id={user.id} role={user.role} refetch={refetch} />
              </table.TableCell>
              <table.TableCell>{user.email}</table.TableCell>
              <table.TableCell>{user.address}</table.TableCell>
              <table.TableCell>{user.numProducts}</table.TableCell>
              <table.TableCell>{user.numCarts}</table.TableCell>
              <table.TableCell>
                <DeleteBtn id={user.id} />
              </table.TableCell>
            </table.TableRow>
          ))
        )}
      </table.TableBody>
    </table.Table>
  )
}
