'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { UploadButton } from '@/components/ui/uploadthing'
import { api } from '@/lib/trpc/react'

interface Props {
  category: { id: string; name: string; image: string }
}

export const UpdateForm: React.FC<Props> = ({ category }) => {
  const router = useRouter()
  const utils = api.useUtils()

  const [img, setImg] = useState<string>(category.image)
  const [isLoading, setUploading] = useState<boolean>(false)

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
      image: img,
    })
  }

  return (
    <form action={action} className="grid grid-cols-3 gap-4">
      <FormField
        label="Name"
        name="name"
        defaultValue={category.name}
        disabled={isPending || isLoading}
        placeholder="Category name"
        message={error?.data?.zodError?.name?.at(0)}
        className="col-span-2"
      />

      <fieldset className="flex flex-col items-center justify-center gap-4">
        <Image
          src={img}
          alt="CategoryImage"
          width={200}
          height={200}
          className="aspect-square rounded-lg object-cover"
        />
        <UploadButton
          endpoint="categoryImage"
          setImg={setImg}
          setUploading={setUploading}
          disabled={isLoading}
        />
      </fieldset>

      <Button className="w-full" disabled={isLoading || isPending} isLoading={isPending}>
        Save Changes
      </Button>
    </form>
  )
}
