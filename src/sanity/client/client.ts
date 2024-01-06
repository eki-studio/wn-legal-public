/**
 * Creates a Sanity client with the given configuration options.
 * @returns The created Sanity client.
 */

import { ADMIN } from '$/eki.config'
import { createClient } from 'next-sanity'
const projectId = ADMIN.projectId
const dataset = ADMIN.dataset
const apiVersion = ADMIN.apiVersion

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
  // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

export default client
