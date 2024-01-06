import { slug, string } from '@/sanity/lib'
import { defineType } from 'sanity'

const schemaCategory = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    string({ name: 'title', title: 'Title' }),
    slug({ name: 'slug', title: 'Slug', options: { source: 'title' } }),
  ],
})

export default schemaCategory
