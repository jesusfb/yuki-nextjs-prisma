import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

export const DeleteBtn: React.FC<{ id: string }> = ({ id }) => {
  const utils = api.useUtils()
  const { mutate, isPending } = api.category.deleteCategory.useMutation({
    onSuccess: () => utils.category.getCategories.invalidate(),
  })

  return (
    <Button size="sm" variant="destructive" isLoading={isPending} onClick={() => mutate({ id })}>
      Delete
    </Button>
  )
}
