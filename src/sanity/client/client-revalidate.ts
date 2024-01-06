//https://www.npmjs.com/package/next-sanity#tag-based-revalidation-webhook

import { ADMIN } from '$/eki.config'
import type { QueryParams } from '@sanity/client'
import { createClient } from 'next-sanity'

const projectId = ADMIN.projectId
const dataset = ADMIN.dataset
const apiVersion = ADMIN.apiVersion

const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false,
})

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export default async function clientRevalidate<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    cache: 'force-cache',
    next: {
      //revalidate: 30, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  })
}
