import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { api } from '@/lib/trpc/react'

interface Props {
  id: string
  role: 'USER' | 'ADMIN'
  refetch: () => void
}
export const ChangeRole: React.FC<Props> = ({ id, role, refetch }) => {
  const { mutate, isPending } = api.user.changeRole.useMutation({ onSuccess: () => refetch() })

  return (
    <Select
      defaultValue={role}
      onValueChange={(value) => mutate({ id, role: value as 'USER' | 'ADMIN' })}
      disabled={isPending}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="USER">User</SelectItem>
        <SelectItem value="ADMIN">Admin</SelectItem>
      </SelectContent>
    </Select>
  )
}
