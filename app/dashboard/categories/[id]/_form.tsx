'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'
import { useState } from 'react'

const UploadButton = dynamic(
  () => import('@/components/uploadthing').then((mod) => mod.UploadButton),
  {
    ssr: false,
    loading: () => (
      <div className="col-span-3 flex flex-col items-center justify-center gap-1">
        <Button size="lg" isLoading>
          Choose File
        </Button>
        <label className="text-xs text-muted-foreground">Image (4MB)</label>
      </div>
    ),
  },
)

interface Props {
  category: { id: string; name: string; image: string | null }
}

export const Form: React.FC<Props> = ({ category }) => {
  const router = useRouter()
  const utils = api.useUtils()

  const [img, setImg] = useState<string>(category.image ?? '')
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
    <form action={action} className="grid grid-cols-2 gap-4">
      <FormField
        label="Name"
        name="name"
        defaultValue={category.name}
        disabled={isPending || isLoading}
        placeholder="Category name"
        message={error?.data?.zodError?.name?.at(0)}
      />

      <fieldset className="flex flex-col items-center justify-center gap-4">
        <Image
          src={img}
          alt="CategoryImage"
          width={200}
          height={200}
          className="aspect-square rounded-lg object-cover"
        />
        <UploadButton setImg={setImg} setUploading={setUploading} disabled={isLoading} />
      </fieldset>

      <Button className="w-full" disabled={isLoading || isPending} isLoading={isPending}>
        Save Changes
      </Button>
    </form>
  )
}
