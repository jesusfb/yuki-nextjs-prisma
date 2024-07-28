'use client'

import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'
import dynamic from 'next/dynamic'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'

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
  name: string
  address: string
  image: string
}

export const Form: React.FC<Props> = (props) => {
  const utils = api.useUtils()
  const [img, setImg] = useState<string>(props.image)
  const [isUploading, setUploading] = useState<boolean>(false)

  const { mutate, isPending, error } = api.user.edit.useMutation({
    onSuccess: async () => {
      await utils.user.getUser.invalidate()
      await utils.auth.me.invalidate()
      toast.success('Profile updated')
    },
    onError: (error) => {
      if (!error.data?.zodError) toast.error(error.message)
    },
  })

  const action = async (formData: FormData) => {
    mutate({
      name: String(formData.get('name')),
      address: String(formData.get('address')),
      image: img,
    })
  }

  const isLoading = isPending || isUploading

  return (
    <form action={action} className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="md:col-span-2">
        <FormField
          label="Name"
          name="name"
          placeholder="Enter your name"
          defaultValue={props.name}
          message={error?.data?.zodError?.name?.at(0)}
          disabled={isLoading}
        />

        <FormField
          label="Address"
          name="address"
          placeholder="Enter your address"
          defaultValue={props.address}
          message={error?.data?.zodError?.address?.at(0)}
          disabled={isLoading}
        />
      </div>

      <fieldset className="flex flex-col items-center gap-4">
        <Image
          src={img}
          alt="profile"
          width={200}
          height={200}
          className="aspect-square rounded-lg object-cover"
        />
        <UploadButton setImg={setImg} setUploading={setUploading} disabled={isLoading} />
      </fieldset>

      <Button className="w-full md:col-span-2" disabled={isUploading} isLoading={isPending}>
        Save Changes
      </Button>
    </form>
  )
}
