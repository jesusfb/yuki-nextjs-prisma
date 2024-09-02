import { generateUploadButton } from '@uploadthing/react'
import { toast } from 'sonner'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { OurFileRouter } from '@/server/uploadthing'

interface Props
  extends React.ComponentProps<ReturnType<typeof generateUploadButton<OurFileRouter>>> {
  setImg: React.Dispatch<React.SetStateAction<string>>
  setUploading: React.Dispatch<React.SetStateAction<boolean>>
}

export const UploadButton: React.FC<Props> = ({ setImg, setUploading, ...props }) => {
  const BaseUploadButton = generateUploadButton<OurFileRouter>()

  return (
    <BaseUploadButton
      {...props}
      appearance={{
        container: 'w-fit',
        button: ({ ready, isUploading }) =>
          buttonVariants({
            size: 'lg',
            className: cn(
              'cursor-pointer',
              (!ready || isUploading) && `cursor-not-allowed opacity-50`,
            ),
          }),
        allowedContent: 'text-muted-foreground text-xs',
      }}
      content={{
        button: ({ ready, isUploading, uploadProgress }) => {
          if (isUploading) return 'Uploading...'
          if (!ready) return `Uploading ${uploadProgress}%`
          return 'Choose File'
        },
      }}
      onUploadBegin={() => setUploading(true)}
      onClientUploadComplete={(file) => {
        setImg(file.at(0)?.url ?? '')
        setUploading(false)
        toast.success('Image uploaded')
      }}
      onUploadError={(error) => {
        toast.error(error.message)
      }}
    />
  )
}
