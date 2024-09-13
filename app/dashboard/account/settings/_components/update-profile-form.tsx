'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { FormField } from '@/components/form-field'
import { Button } from '@/components/ui/button'
import { UploadDropzone } from '@/components/uploadthing'

import { api } from '@/lib/trpc/react'

export const UpdateProfileForm: React.FC<Props> = ({ name, avatar }) => {
  const router = useRouter()
  const [imageUrl, setImageUrl] = useState<string | null>(avatar)
  const [isUploading, setIsUploading] = useState(false)

  const { mutate, isPending, error } = api.user.updateProfile.useMutation({
    // prettier-ignore
    onSuccess: () => { router.refresh(); toast.success('Profile updated') },
    onError: (err) => !err.data?.zodError && toast.error(err.message),
  })

  const action = async (formData: FormData) => {
    mutate({
      name: String(formData.get('name')),
      avatar: imageUrl,
    })
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <form action={action} className="space-y-4">
        <FormField
          label="Name"
          name="name"
          defaultValue={name}
          disabled={isPending}
          message={error?.data?.zodError?.name?.at(0)}
        />

        <UploadDropzone
          endpoint="avatarUploader"
          disabled={isPending}
          config={{ mode: 'auto' }}
          onUploadBegin={() => setIsUploading(true)}
          onClientUploadComplete={(res) => {
            setIsUploading(false)
            if (!res[0]) return
            setImageUrl(res[0].url)
          }}
        />
        <Button className="w-full" disabled={isPending || isUploading}>
          Save Changes
        </Button>
      </form>

      <Image
        src={imageUrl ?? ''}
        alt={name}
        width={350}
        height={350}
        className="mx-auto aspect-square rounded-lg object-cover"
      />
    </div>
  )
}

interface Props {
  name: string
  avatar: string | null
}
