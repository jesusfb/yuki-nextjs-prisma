'use client'

import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'
import { UploadButton } from '@/components/uploadthing'

interface Props {
  name: string
  address: string
  image: string
}

export const Form: React.FC<Props> = (props) => {
  const utils = api.useUtils()
  const [img, setImg] = useState<string>(props.image)
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

  return (
    <form action={action} className="space-y-4">
      <FormField
        label="Name"
        name="name"
        placeholder="Enter your name"
        defaultValue={props.name}
        message={error?.data?.zodError?.name?.at(0)}
        disabled={isPending}
      />

      <FormField
        label="Address"
        name="address"
        placeholder="Enter your address"
        defaultValue={props.address}
        message={error?.data?.zodError?.address?.at(0)}
        disabled={isPending}
      />

      <fieldset className="grid grid-cols-4">
        <UploadButton
          endpoint="imageUploader"
          className="col-span-3"
          onClientUploadComplete={(file) => {
            setImg(file.at(0)?.url ?? '')
            toast.success('Image uploaded')
          }}
          onUploadError={(error) => {
            toast.error(error.message)
          }}
          disabled={isPending}
        />
        <Image
          src={img}
          alt="profile"
          width={100}
          height={100}
          className="aspect-square object-cover"
        />
      </fieldset>

      <Button className="w-full" isLoading={isPending}>
        Save Changes
      </Button>
    </form>
  )
}
