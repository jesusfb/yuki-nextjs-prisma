import { toast } from 'sonner'

import * as select from '@/components/ui/select'
import { api } from '@/lib/trpc/react'

interface Props {
  id: string
  role: 'USER' | 'ADMIN'
  refetch: () => void
}
export const ChangeRole: React.FC<Props> = ({ id, role, refetch }) => {
  const { mutate, isPending } = api.user.changeRole.useMutation({
    onSuccess: () => refetch(),
    onError: (e) => toast.error(e.message),
  })

  return (
    <select.Select
      defaultValue={role}
      onValueChange={(value) => mutate({ id, role: value as 'USER' | 'ADMIN' })}
      disabled={isPending}
    >
      <select.SelectTrigger>
        <select.SelectValue />
      </select.SelectTrigger>
      <select.SelectContent>
        <select.SelectItem value="USER">User</select.SelectItem>
        <select.SelectItem value="ADMIN">Admin</select.SelectItem>
      </select.SelectContent>
    </select.Select>
  )
}
