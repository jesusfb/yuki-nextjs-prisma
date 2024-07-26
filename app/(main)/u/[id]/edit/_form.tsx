'use client'

import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/trpc/react'
import { UploadButton } from '@/components/uploadthing'

interface Props {
  user: {
    name: string
    address: string
    image: string
  }
}

export const Form: React.FC<Props> = ({ user }) => {
  const utils = api.useUtils()
  const [inp, setInp] = useState<Props['user']>({
    name: user.name,
    address: user.address ?? '',
    image: user.image ?? '',
  })
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

  return (
    <form action={() => mutate(inp)} className="space-y-4">
      <FormField
        label="Name"
        name="name"
        placeholder="Enter your name"
        value={inp.name ?? ''}
        onChange={(e) => setInp((prev) => ({ ...prev, name: e.target.value }))}
        message={error?.data?.zodError?.message?.at(0)}
        disabled={isPending}
      />

      <FormField
        label="Address"
        name="address"
        placeholder="Enter your address"
        defaultValue={inp.address ?? ''}
        onChange={(e) => setInp((prev) => ({ ...prev, address: e.target.value }))}
        message={error?.data?.zodError?.message?.at(1)}
        disabled={isPending}
      />

      <fieldset className="grid grid-cols-4">
        <UploadButton
          endpoint="imageUploader"
          className="col-span-3"
          onClientUploadComplete={(file) => {
            setInp((prev) => ({ ...prev, image: file.at(0)?.url ?? '' }))
            toast.success('Image uploaded')
          }}
          onUploadError={(error) => {
            toast.error(error.message)
          }}
          disabled={isPending}
        />
        <Image
          src={inp.image ?? ''}
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
