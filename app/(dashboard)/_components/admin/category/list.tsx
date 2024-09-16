import Link from 'next/link'

import { Button } from '@/components/ui/button'
import * as table from '@/components/ui/table'

export const CategoryList: React.FC<Props> = ({ categories }) => (
  <table.Table>
    <table.TableHeader>
      <table.TableRow>
        {headers.map((header) => (
          <table.TableHead key={header}>{header}</table.TableHead>
        ))}
      </table.TableRow>
    </table.TableHeader>

    <table.TableBody>
      {categories.map((category) => (
        <table.TableRow key={category.id}>
          <table.TableCell>{category.id}</table.TableCell>
          <table.TableCell>{category.name}</table.TableCell>
          <table.TableCell>{category._count.products}</table.TableCell>
          <table.TableCell>{category.createdAt.toDateString()}</table.TableCell>
          <table.TableCell className="flex gap-2">
            <Button size="sm" asChild>
              <Link href={`/dashboard/category/${category.id}/edit`}>Edit</Link>
            </Button>
            <Button variant="destructive" size="sm" asChild>
              <Link href={`/dashboard/category/${category.id}/delete`}>Delete</Link>
            </Button>
          </table.TableCell>
        </table.TableRow>
      ))}
    </table.TableBody>
  </table.Table>
)

const headers = ['ID', 'Name', 'Products', 'Created At', 'Actions']

interface Props {
  categories: {
    id: string
    name: string
    _count: {
      products: number
    }
    createdAt: Date
  }[]
}
