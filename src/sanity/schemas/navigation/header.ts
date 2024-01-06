import { array, i18Document, object, string } from '@/sanity/lib'
import { defineType } from 'sanity'

const schemaHeader = defineType({
  type: 'document',
  name: 'header',
  title: 'Header',

  fields: [
    i18Document(),
    array({
      name: 'links',
      title: 'Links',
      of: [
        object({
          name: 'link',
          title: 'Link',
          fields: [
            string({ name: 'name', title: 'Name' }),
            string({ name: 'url', title: 'Url' }),
          ],
        }),
      ],
    }),
  ],
})

export default schemaHeader
