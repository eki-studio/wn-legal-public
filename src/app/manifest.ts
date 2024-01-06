import 'server-only'

import { getManifest } from '@/utils/metadata'
import { MetadataRoute } from 'next'
import { Manifest } from 'next/dist/lib/metadata/types/manifest-types'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return (await getManifest()) as Manifest
}
