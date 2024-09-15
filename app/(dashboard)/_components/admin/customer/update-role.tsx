import { Role } from '@prisma/client'

import * as select from '@/components/ui/select'
import { Cell } from '@/components/ui/table'

import { api } from '@/lib/trpc/react'

interface Props {
  userId: string
  currentRole: Role
}

export const UpdateRole: React.FC<Props> = ({ userId, currentRole }) => {
  const { mutate, isPending, data } = api.user.updateRole.useMutation()

  return (
    <Cell>
      <select.Root
        disabled={isPending}
        defaultValue={String(data ?? currentRole)}
        onValueChange={(role: Role) => {
          mutate({ userId, role })
        }}
      >
        <select.Trigger>
          <select.SelectValue placeholder="Select role" />
        </select.Trigger>

        <select.Content>
          <select.Item value={Role.USER}>User</select.Item>
          <select.Item value={Role.ADMIN}>Admin</select.Item>
        </select.Content>
      </select.Root>
    </Cell>
  )
}
