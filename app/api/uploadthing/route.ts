import { createRouteHandler } from 'uploadthing/next'

import { env } from '@/env'
import { ourFileRouter } from '@/server/uploadthing'

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: { isDev: env.NODE_ENV === 'development' },
})
