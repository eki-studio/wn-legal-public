import { i18Document, richText, string } from '@/sanity/lib'
import { defineType } from 'sanity'

const schemaCookieBanner = defineType({
  type: 'document',
  name: 'cookieBanner',
  title: 'Cookie Banner',

  fields: [
    i18Document(),
    richText({ name: 'text', title: 'Text' }),
    string({ name: 'buttonText', title: 'Button text' }),
  ],
})

export default schemaCookieBanner
