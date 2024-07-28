import type { MetadataRoute } from 'next'

import { getBaseUrl } from '@/lib/site'
import { db } from '@/server/db'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch static routes
  const routesMap: Route[] = [''].map((route) => ({
    url: `${getBaseUrl()}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const userRoutes: Route[] = await db.user
    .findMany({ select: { id: true, updatedAt: true } })
    .then((users) =>
      users.map((user) => ({
        url: `${getBaseUrl()}/u/${user.id}`,
        lastModified: user.updatedAt.toISOString(),
      })),
    )

  // Fetch dynamic routes
  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([userRoutes])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }
  return [...routesMap, ...fetchedRoutes]
}
