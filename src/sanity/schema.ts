/**
 * Defines the schema for the Sanity Studio.
 * @remarks
 * This includes the schema for collections, navigation, pages, and settings.
 * @returns An array of schema objects.
 * @public
 */

import schemaHome from './schemas/home'
import schemaNavigation from './schemas/navigation'
import schemaPolicies from './schemas/policies'
import schemaSeo from './schemas/seo'

export const singletonActions = new Set([])
export const singletonsTypes = new Set([])

const schema = [schemaSeo, schemaHome, ...schemaNavigation, schemaPolicies]

export default schema
