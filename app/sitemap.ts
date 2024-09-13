import type { MetadataRoute } from 'next'

import { getBaseUrl } from '@/lib/utils'
import { db as _db } from '@/server/db'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch static routes
  const routesMap: Route[] = [
    '',
    'about-us',
    'contact-us',
    'privacy-policy',
    'terms-of-service',
  ].map((route) => ({
    url: `${getBaseUrl()}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  // const userRoutes: Route[] = await db.user
  //   .findMany({ select: { id: true, name: true, updatedAt: true } })
  //   .then((users) =>
  //     users.map((user) => ({
  //       url: `${getBaseUrl()}/u/${createSlug({ str: user.name, suffix: user.id })}`,
  //       lastModified: user.updatedAt.toISOString(),
  //     })),
  //   )

  // Fetch dynamic routes
  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([])).flat()
  } catch (error) {
    if (error instanceof Error) throw new Error(`Error fetching dynamic routes: ${error.message}`)
  }
  return [...routesMap, ...fetchedRoutes]
}
