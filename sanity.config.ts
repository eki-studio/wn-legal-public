import { DocumentInternationalization, documentsI18n } from '@/sanity/i18n'
import schema from '@/sanity/schema'
import structure from '@/sanity/structure'
import { colorInput } from '@sanity/color-input'
import { DeleteTranslationAction } from '@sanity/document-internationalization'
import { googleMapsInput } from '@sanity/google-maps-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { iconify } from 'sanity-plugin-iconify'
import { media } from 'sanity-plugin-media'
import { deskTool } from 'sanity/desk'
import { ADMIN, USE } from './eki.config'

//New sanity build

const config = defineConfig({
  name: 'default',
  title: ADMIN.title,
  projectId: ADMIN.projectId || '',
  dataset: ADMIN.dataset || '',
  //@ts-ignore
  apiVersion: ADMIN.apiVersion,
  basePath: ADMIN.basePath,
  schema: {
    types: schema,
    templates: (prev) => {
      if (USE.i18n) {
        return prev.filter((template) => !documentsI18n.includes(template.id))
      } else return prev
    },
  },
  document: {
    actions: (prev, { schemaType }) => {
      // Add to the same schema types you use for internationalization
      if (documentsI18n.includes(schemaType)) {
        // You might also like to filter out the built-in "delete" action
        return [...prev, DeleteTranslationAction]
      }

      return prev
    },
  },
  plugins: [
    colorInput(),
    deskTool({
      structure: structure,
    }),
    media(),
    visionTool(),
    googleMapsInput({
      apiKey: ADMIN.googleAPIKey || '',
    }),
    iconify({
      collections: ['radix-icons'],
      showName: true,
    }),
    unsplashImageAsset(),
    DocumentInternationalization(),
  ],
})

export default config
