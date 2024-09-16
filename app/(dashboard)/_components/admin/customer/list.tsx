import type { User } from '@prisma/client'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import * as table from '@/components/ui/table'

export const CustomersList: React.FC<{ customers: User[] }> = ({ customers }) => (
  <table.Table>
    <table.TableHeader>
      <table.TableRow>
        {headers.map((header) => (
          <table.TableHead key={header}>{header}</table.TableHead>
        ))}
      </table.TableRow>
    </table.TableHeader>

    <table.TableBody>
      {customers.map((customer) => (
        <table.TableRow key={customer.id}>
          <table.TableCell>{customer.id}</table.TableCell>
          <table.TableCell>{customer.name}</table.TableCell>
          <table.TableCell>{customer.email}</table.TableCell>
          <table.TableCell>{customer.role}</table.TableCell>
          <table.TableCell>{customer.createdAt.toDateString()}</table.TableCell>
          <table.TableCell className="flex gap-2">
            <Button size="sm" asChild>
              <Link href={`/dashboard/user/${customer.id}/edit`}>Edit</Link>
            </Button>
            <Button variant="destructive" size="sm" asChild>
              <Link href={`/dashboard/user/${customer.id}/delete`}>Delete</Link>
            </Button>
          </table.TableCell>
        </table.TableRow>
      ))}
    </table.TableBody>
  </table.Table>
)

const headers = ['ID', 'Name', 'Email', 'Role', 'Created At', 'Actions']
