'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import * as select from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { UploadButton } from '@/components/ui/uploadthing'
import { api } from '@/lib/trpc/react'

interface Props {
  product: {
    id: string
    name: string
    description: string
    category: { id: string; name: string }
    price: number
    stock: number
    image: string
  }
  categories: { id: string; name: string }[]
}

export const UpdateForm: React.FC<Props> = ({ product, categories }) => {
  const router = useRouter()
  const utils = api.useUtils()

  const [img, setImg] = useState<string>(product.image)
  const [isLoading, setUploading] = useState<boolean>(false)

  const { mutate, isPending, error } = api.product.updateProduct.useMutation({
    onSuccess: async () => {
      await utils.category.invalidate()
      await utils.product.invalidate()
      router.push('/dashboard/products')
      toast.success('Product updated')
    },
    onError: (error) => !error.data?.zodError && toast.error(error.message),
  })

  const action = async (formData: FormData) => {
    mutate({
      id: product.id,
      image: img,
      name: String(formData.get('name')),
      description: String(formData.get('description')),
      category: String(formData.get('category')),
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
    })
  }

  return (
    <form action={action} className="grid grid-cols-3 gap-4">
      <div className="col-span-2 space-y-4">
        <FormField
          label="Name"
          name="name"
          defaultValue={product.name}
          disabled={isPending || isLoading}
          placeholder="Product name"
          message={error?.data?.zodError?.name?.at(0)}
        />

        <FormField
          label="Description"
          name="description"
          defaultValue={product.description}
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
          <select.Select defaultValue={product.category.id}>
            <select.SelectTrigger>
              <select.SelectValue placeholder="Select category of product" />
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
          defaultValue={product.price}
          disabled={isPending || isLoading}
          placeholder="Product price"
          message={error?.data?.zodError?.price?.at(0)}
          type="number"
        />

        <FormField
          label="Stock"
          name="stock"
          defaultValue={product.stock}
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
        Save Changes
      </Button>
    </form>
  )
}
