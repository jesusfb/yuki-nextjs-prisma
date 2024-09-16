import type { MetadataRoute } from 'next'

import { getBaseUrl, slugify } from '@/lib/utils'
import { db } from '@/server/db'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch static routes
  const routesMap: Route[] = [
    '',
    'home',
    'home/about-us',
    'home/contact-us',
    'home/privacy-policy',
    'home/terms-of-service',
  ].map((route) => ({
    url: `${getBaseUrl()}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const productsRoutes: Route[] = await db.product
    .findMany({ select: { id: true, name: true, createdAt: true } })
    .then((users) =>
      users.map((p) => ({
        url: `${getBaseUrl()}/p/${slugify(p.name, p.id)}`,
        lastModified: p.createdAt.toISOString(),
      })),
    )

  // Fetch dynamic routes
  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([productsRoutes])).flat()
  } catch (error) {
    if (error instanceof Error) throw new Error(`Error fetching dynamic routes: ${error.message}`)
  }
  return [...routesMap, ...fetchedRoutes]
}
