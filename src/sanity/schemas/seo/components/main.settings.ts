import { array, string, text, url } from '@/sanity/lib'
import { defineField } from 'sanity'
import { languages } from '../constants/language'

const main = defineField({
  name: 'main',
  title: 'Main Settings',
  type: 'object',
  group: 'main',
  fields: [
    string({
      title: 'Title',
      name: 'title',
    }),
    text({
      title: 'Description',
      name: 'description',
      rows: 3,
      description:
        'Describe the page, 155-300 characters is the optimal length.',
      validation: (Rule) => Rule.min(155).max(450),
    }),
    string({
      name: 'lang',
      title: 'Language',
      options: {
        list: languages,
      },
    }),
    string({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Specify the author of the content on this page.',
    }),
    url({
      name: 'authorUrl',
      title: 'Author URL',
      type: 'url',
      description: 'Specify the author website of the content on this page.',
    }),
    array({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Enter a list of keywords relevant to this page.',
    }),
  ],
})

export default main
