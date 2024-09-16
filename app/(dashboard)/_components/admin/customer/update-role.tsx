import { Role } from '@prisma/client'

import * as select from '@/components/ui/select'
import { TableCell } from '@/components/ui/table'

import { api } from '@/lib/trpc/react'

interface Props {
  userId: string
  currentRole: Role
}

export const UpdateRole: React.FC<Props> = ({ userId, currentRole }) => {
  const { mutate, isPending, data } = api.user.updateRole.useMutation()

  return (
    <TableCell>
      <select.Select
        disabled={isPending}
        defaultValue={String(data ?? currentRole)}
        onValueChange={(role: Role) => {
          mutate({ userId, role })
        }}
      >
        <select.SelectTrigger>
          <select.SelectValue placeholder="Select role" />
        </select.SelectTrigger>

        <select.SelectContent>
          <select.SelectItem value={Role.USER}>User</select.SelectItem>
          <select.SelectItem value={Role.ADMIN}>Admin</select.SelectItem>
        </select.SelectContent>
      </select.Select>
    </TableCell>
  )
}
