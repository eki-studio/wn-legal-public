import { array, i18Document, object, string } from '@/sanity/lib'
import { defineType } from 'sanity'

const schemaFooter = defineType({
  type: 'document',
  name: 'footer',
  title: 'Footer',

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
    string({ name: 'copyText', title: 'Copyight text' }),
  ],
})

export default schemaFooter
