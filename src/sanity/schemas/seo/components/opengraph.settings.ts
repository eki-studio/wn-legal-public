import { image, string, text, url } from '@/sanity/lib'
import { defineField } from 'sanity'
import { ogTypes } from '../constants/openGraph'

const og = defineField({
  name: 'og',
  title: 'Open Graph',
  type: 'object',
  group: 'og',
  description: 'https://ogp.me/',
  fields: [
    string({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
    }),
    url({
      name: 'ogCanonicalURL',
      title: 'Open Graph Canonical URL',
      type: 'url',
      description: 'Specify the canonical URL',
    }),
    string({
      name: 'ogType',
      title: 'Open Graph Types',
      type: 'string',
      options: {
        list: ogTypes,
      },
    }),
    string({
      name: 'ogSiteName',
      title: 'Open Graph Site Name',
      type: 'string',
    }),
    text({
      name: 'ogDescription',
      title: 'Open Graph Title',
      type: 'text',
      description:
        'Describe the page, 155-300 characters is the optimal length.',
      rows: 3,
      validation: (Rule) => Rule.min(100).max(400),
    }),
    image({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description:
        'Make sure your images are at least 1200px by 630px and have a 1.91:1 aspect ratio.',
    }),
  ],
})

export default og
