import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

export const DeleteBtn: React.FC<{ id: string }> = ({ id }) => {
  const utils = api.useUtils()
  const { mutate, isPending } = api.product.deleteProduct.useMutation({
    onSuccess: () => utils.product.getAdminProducts.invalidate(),
  })

  return (
    <Button size="sm" variant="destructive" isLoading={isPending} onClick={() => mutate({ id })}>
      Delete
    </Button>
  )
}
