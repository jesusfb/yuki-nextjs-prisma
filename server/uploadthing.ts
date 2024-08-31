import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { UploadThingError, UTApi } from 'uploadthing/server'

import { auth } from '@/server/auth'

const f = createUploadthing()

const config = f({ image: { maxFileSize: '4MB' } })
  // Set permissions and file types for this FileRoute
  .middleware(async () => {
    // This code runs on your server before upload
    const { user } = await auth()

    // If you throw, the user will not be able to upload
    if (!user) throw new UploadThingError('You must be logged in to upload')

    // Whatever is returned here is accessible in onUploadComplete as `metadata`
    return { userId: user.id }
  })
  .onUploadComplete(async ({ metadata, file }) => {
    // This code RUNS ON YOUR SERVER after upload
    console.log('Upload complete for userId:', metadata.userId)

    console.log('file url', file.url)

    // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
    return { uploadedBy: metadata.userId }
  })

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  avatarImage: config,
  categoryImage: config,
  productImage: config,
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter

export const utapi = new UTApi()
