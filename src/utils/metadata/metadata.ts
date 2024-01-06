/**
 * Retrieves metadata for a given schema type.
 * @param schemaType - The schema type to retrieve metadata for.
 * @returns The metadata object containing title, description, keywords, and openGraph properties.
 */

import { Locale, USE } from '$/eki.config'
import { client } from '@/sanity/client'
import { QueryMetadata } from '@/sanity/lib/types'
import {
  QuerySiteMetadataI18N,
  querySiteMetadata,
  querySiteMetadataI18N,
} from '@/sanity/schemas/seo/query'
import { QuerySiteMetadata } from '@/sanity/schemas/seo/types'
import type { Metadata } from 'next'

/**
 * Retrieves site metadata from Sanity CMS.
 * @returns {Promise<Metadata>} The metadata object containing site information.
 */

export const getSiteMeta = async ({ params }: QuerySiteMetadataI18N) => {
  const DATA = USE.i18n
    ? await client.fetch<QuerySiteMetadata>(querySiteMetadataI18N({ params }))
    : await client.fetch<QuerySiteMetadata>(querySiteMetadata)

  const url = DATA?.ogCanonicalURL || 'https://eki.studio'

  const metadata: Metadata = {
    metadataBase: new URL(url),
    title: DATA?.title || 'Eki studio',
    description: DATA?.description || 'Eki studio',
    alternates: {
      canonical: '/',
      /* languages: {
        'en-US': '/en-US',
        'de-DE': '/de-DE',
      }, */
    },
    authors: [
      {
        name: DATA?.author || 'eki.studio',
        url: DATA?.authorUrl || 'https://eki.studio',
      },
    ],
    keywords: DATA?.keywords || [],
    icons: [],
    openGraph: {
      title: DATA?.ogTitle || 'Eki studio',
      description: DATA?.ogDescription || 'Eki studio',
      images: [
        { url: DATA?.ogImage, width: 1200, height: 630, alt: DATA?.ogTitle },
      ],
      type: DATA?.ogType || 'website',
      locale: DATA?.lang || 'en_US',
    },
  }

  return metadata as Metadata
}

export const getMetadata = async (
  schemaType: any,
  params: { lang: Locale }
) => {
  const DATAS = await client.fetch<QueryMetadata>(schemaType)

  const DATA = DATAS?.metadata

  const SITEDATA = await getSiteMeta({ params })

  const metadata: Metadata = {
    title: DATA?.title || SITEDATA.title,
    description: DATA?.description || SITEDATA.description,
    keywords: DATA?.keywords || SITEDATA.keywords,
    openGraph: {
      title: DATA?.ogTitle || SITEDATA.openGraph?.title,
      description: DATA?.ogDescription || SITEDATA.openGraph?.description,
      images: [
        {
          //@ts-ignore
          url: DATA?.ogImage || SITEDATA?.openGraph?.images[0]?.url,
          width: 1200,
          height: 630,
          //@ts-ignore
          alt: DATA?.ogTitle || SITEDATA?.openGraph?.title,
        },
      ],
    },
  }

  return metadata as Metadata
}
