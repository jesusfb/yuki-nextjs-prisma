'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

interface Props {
  category: { id: string; name: string; image: string | null }
}

export const Form: React.FC<Props> = ({ category }) => {
  const router = useRouter()
  const utils = api.useUtils()

  const { mutate, isPending, error } = api.category.updateCategory.useMutation({
    onSuccess: async () => {
      await utils.category.getCategories.invalidate()
      router.push('/dashboard/categories')
      toast.success('Category created')
    },
    onError: (error) => !error.data?.zodError && toast.error(error.message),
  })

  const action = async (formData: FormData) => {
    mutate({
      id: category.id,
      name: String(formData.get('name')),
      image: String(formData.get('image')),
    })
  }

  return (
    <form action={action} className="space-y-4">
      <FormField
        label="Name"
        name="name"
        defaultValue={category.name}
        disabled={isPending}
        placeholder="Category name"
        message={error?.data?.zodError?.name?.at(0)}
      />
      <FormField
        label="Image"
        name="image"
        defaultValue={category.image}
        disabled={isPending}
        placeholder="Category image"
        message={error?.data?.zodError?.image?.at(0)}
      />

      <Button className="w-full" isLoading={isPending}>
        Create
      </Button>
    </form>
  )
}
