import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { api } from '@/lib/trpc/server'

const headers = ['ID', 'Name', 'Number of Products', 'Actions']

export const List: React.FC = async () => {
  const categories = await api.category.getCategories()
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
        {categories.length === 0 && (
          <TableRow>
            <TableCell colSpan={headers.length} className="text-center text-muted-foreground">
              No categories found.
            </TableCell>
          </TableRow>
        )}

        {categories.map((category) => (
          <TableRow key={category.id}>
            <TableCell>{category.name}</TableCell>
            <TableCell>{category.numberOfProducts}</TableCell>
            <TableCell>
              <button>Edit</button>
              <button>Delete</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
