import type { MetadataRoute } from 'next'

import { getBaseUrl } from '@/lib/site'
import { db } from '@/server/db'
import { createSlug } from '@/lib/utils'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch static routes
  const routesMap: Route[] = ['', 'about', 'contact', 'shop'].map((route) => ({
    url: `${getBaseUrl()}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const userRoutes: Route[] = await db.user
    .findMany({ select: { id: true, name: true, updatedAt: true } })
    .then((users) =>
      users.map((user) => ({
        url: `${getBaseUrl()}/u/${createSlug({ str: user.name, suffix: user.id })}`,
        lastModified: user.updatedAt.toISOString(),
      })),
    )

  const categoryRoutes: Route[] = await db.category
    .findMany({ select: { id: true, name: true, createdAt: true } })
    .then((categories) =>
      categories.map((category) => ({
        url: `${getBaseUrl()}/shop/c/${createSlug({ str: category.name, suffix: category.id })}`,
        lastModified: category.createdAt.toISOString(),
      })),
    )

  const productRoutes: Route[] = await db.product
    .findMany({ select: { id: true, name: true, updatedAt: true } })
    .then((products) =>
      products.map((product) => ({
        url: `${getBaseUrl()}/shop/p/${createSlug({ str: product.name, suffix: product.id })}`,
        lastModified: product.updatedAt.toISOString(),
      })),
    )

  // Fetch dynamic routes
  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([userRoutes, categoryRoutes, productRoutes])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }
  return [...routesMap, ...fetchedRoutes]
}
