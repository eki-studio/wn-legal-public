import { i18Document, richText, string } from '@/sanity/lib'
import { defineType } from 'sanity'

const schemaPolicies = defineType({
  type: 'document',
  name: 'policy',
  title: 'Policy',
  fields: [
    i18Document(),
    string({ name: 'title', title: 'Title' }),
    richText({ name: 'content', title: 'Content' }),
  ],
})

export default schemaPolicies
