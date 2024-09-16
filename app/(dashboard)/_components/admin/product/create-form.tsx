'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import * as select from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { UploadDropzone } from '@/components/uploadthing'

import { api } from '@/lib/trpc/react'

export const CreateProductForm: React.FC<Props> = ({ categories }) => {
  const router = useRouter()
  const [upload, setUpload] = useState<{ url?: string; loading: boolean }>({ loading: false })

  const { mutate, isPending, error } = api.product.create.useMutation({
    onError: (e) => !e.data?.zodError && toast.error(e.message),
    onSuccess: async () => {
      toast.success('Product created')
      router.push('/dashboard/products')
      router.refresh()
    },
  })

  const action = async (formData: FormData) => {
    mutate({
      name: String(formData.get('name')),
      description: String(formData.get('description')),
      category: String(formData.get('category')),
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
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
          disabled={isPending}
        />
        <FormField
          label="Description"
          name="description"
          message={error?.data?.zodError?.description?.at(0)}
          disabled={isPending}
          asChild
        >
          <Textarea />
        </FormField>

        <FormField label="Category" name="category" disabled={isPending} asChild>
          <select.Select>
            <select.SelectTrigger>
              <select.SelectValue placeholder="Select Category" />
            </select.SelectTrigger>

            <select.SelectContent>
              {categories.map((category) => (
                <select.SelectItem key={category.id} value={category.id}>
                  {category.name}
                </select.SelectItem>
              ))}
            </select.SelectContent>
          </select.Select>
        </FormField>

        <FormField
          label="Price"
          name="price"
          type="number"
          message={error?.data?.zodError?.price?.at(0)}
          disabled={isPending}
        />
        <FormField
          label="Stock"
          name="stock"
          type="number"
          message={error?.data?.zodError?.stock?.at(0)}
          disabled={isPending}
        />

        <Button className="w-full" disabled={isPending || upload.loading}>
          {isPending ? 'Creating...' : 'Create Product'}
        </Button>
      </form>

      <div className="grid place-items-center gap-2">
        <UploadDropzone
          endpoint="prodcutUploader"
          config={{ mode: 'auto' }}
          disabled={isPending || upload.loading}
          onUploadBegin={() => setUpload({ url: '', loading: true })}
          onClientUploadComplete={(e) => {
            if (e.length === 0) return
            setUpload({ url: e.at(0)?.url, loading: false })
          }}
          onUploadError={(e) => {
            toast.error(e.message)
            setUpload({ loading: false })
          }}
        />

        <Image
          src={upload.url ?? '/logo.svg'}
          alt="Produc Image"
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  )
}

interface Props {
  categories: {
    id: string
    name: string
  }[]
}
