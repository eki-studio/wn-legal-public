//https://claritydev.net/blog/nextjs-dynamic-sitemap-pages-app-directory

import { ADMIN, ROUTE } from '$/eki.config'
import { MetadataRoute } from 'next'
const URL = ADMIN.siteUrl

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.values(ROUTE).map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
