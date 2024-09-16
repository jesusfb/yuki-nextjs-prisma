'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { UploadDropzone } from '@/components/uploadthing'

import { api } from '@/lib/trpc/react'

export const CreateCategoryForm: React.FC = () => {
  const router = useRouter()
  const [upload, setUpload] = useState<{ url?: string; loading: boolean }>({ loading: false })

  const { mutate, isPending, error } = api.category.create.useMutation({
    onSuccess: async () => {
      toast.success('Category created')
      router.push('/dashboard/categories')
      router.refresh()
    },
    onError: (e) => !e.data?.zodError && toast.error(e.message),
  })

  const isDisabled = isPending || upload.loading

  const action = async (formData: FormData) => {
    mutate({
      name: String(formData.get('name')),
      description: String(formData.get('description')),
      image: upload.url,
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <form action={action} className="space-y-4 md:col-span-2">
        <FormField
          label="Name"
          name="name"
          message={error?.data?.zodError?.name?.at(0)}
          disabled={isDisabled}
        />
        <FormField
          label="Description"
          name="description"
          message={error?.data?.zodError?.description?.at(0)}
          disabled={isDisabled}
        />

        <Button className="w-full" disabled={isDisabled}>
          {isPending ? 'Creating...' : 'Create'}
        </Button>
      </form>

      <div className="grid gap-2 place-items-center">
        <UploadDropzone
          endpoint="categoryUploader"
          config={{ mode: 'auto' }}
          disabled={isDisabled}
          onUploadBegin={() => setUpload({ loading: true })}
          onClientUploadComplete={(e) => {
            if (!e.at(0)) return
            setUpload({ loading: false, url: e.at(0)?.url })
          }}
          onUploadError={(e) => {
            toast.error(e.message)
            setUpload({ loading: false })
          }}
        />

        <Image
          src={upload.url ?? ''}
          alt="Uploaded image"
          width={200}
          height={200}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  )
}
