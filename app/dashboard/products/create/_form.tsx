'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { UploadButton } from '@/components/uploadthing'
import { api } from '@/lib/trpc/react'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const Form: React.FC<{ categories: { id: string; name: string }[] }> = ({ categories }) => {
  const router = useRouter()
  const utils = api.useUtils()

  const [img, setImg] = useState<string>('/default.jpg')
  const [isLoading, setUploading] = useState<boolean>(false)

  const { mutate, isPending, error } = api.product.createProduct.useMutation({
    onSuccess: async () => {
      await utils.product.getAdminProducts.invalidate()
      router.push('/dashboard/products')
      toast.success('Product created')
    },
    onError: (error) => !error.data?.zodError && toast.error(error.message),
  })

  const action = async (formData: FormData) => {
    mutate({
      name: String(formData.get('name')),
      description: String(formData.get('description')),
      category: String(formData.get('category')),
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
      image: img,
    })
  }

  return (
    <form action={action} className="grid grid-cols-3 gap-4">
      <div className="col-span-2 space-y-4">
        <FormField
          label="Name"
          name="name"
          disabled={isPending || isLoading}
          placeholder="Product name"
          message={error?.data?.zodError?.name?.at(0)}
        />

        <FormField
          label="Description"
          name="description"
          disabled={isPending || isLoading}
          placeholder="Product description"
          message={error?.data?.zodError?.description?.at(0)}
          asChild
        >
          <Textarea />
        </FormField>

        <FormField
          label="Category"
          name="category"
          disabled={isPending || isLoading}
          message={error?.data?.zodError?.category?.at(0)}
          asChild
        >
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>

            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>

        <FormField
          label="Price"
          name="price"
          disabled={isPending || isLoading}
          placeholder="Product price"
          message={error?.data?.zodError?.price?.at(0)}
          type="number"
        />

        <FormField
          label="Stock"
          name="stock"
          disabled={isPending || isLoading}
          placeholder="Product stock"
          message={error?.data?.zodError?.stock?.at(0)}
          type="number"
        />
      </div>

      <fieldset className="flex flex-col items-center justify-center gap-4">
        <Image
          src={img}
          alt="CategoryImage"
          width={200}
          height={200}
          className="aspect-square rounded-lg object-cover"
        />
        <UploadButton
          endpoint="productImage"
          setImg={setImg}
          setUploading={setUploading}
          disabled={isLoading}
        />
      </fieldset>

      <Button className="col-span-2" disabled={isLoading || isPending} isLoading={isPending}>
        Create
      </Button>
    </form>
  )
}
