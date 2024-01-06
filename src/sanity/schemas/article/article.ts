import { array, richText, slug, string } from '@/sanity/lib'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'
import { defineType } from 'sanity'

const schemaArticle = defineType({
  type: 'document',
  name: 'article',
  title: 'Article',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'article' }),
    string({ name: 'title', title: 'Title' }),
    slug({ name: 'slug', title: 'Slug', options: { source: 'title' } }),
    richText({
      name: 'richText',
      title: 'Rich Text',
    }),
    array({
      name: 'categories',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    }),
  ],
})

export default schemaArticle
