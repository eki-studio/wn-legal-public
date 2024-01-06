/**
 * Retrieves the metadata manifest from Sanity CMS.
 * @returns The metadata manifest object.
 */

import { client } from '@/sanity/client'
import { queryManifest } from '@/sanity/schemas/seo/query'
import { QueryManifest } from '@/sanity/schemas/seo/types'
import { MetadataRoute } from 'next'

export default async function getManifest() {
  const DATA = await client.fetch<QueryManifest>(queryManifest)

  const manifest: MetadataRoute.Manifest = {
    name: DATA?.manifestName || 'Eki studio',
    short_name: DATA?.manifestShortName || 'Eki studio',
    description: DATA?.manifestDescription || 'Eki studio',
    start_url: DATA?.manifestStartUrl || '/',
    display: DATA?.manifestDisplayMode,
    background_color: DATA?.manifestBgColor,
    theme_color: DATA?.manifestThemeColor,
    categories: DATA?.manifestCategories,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
  return manifest
}
