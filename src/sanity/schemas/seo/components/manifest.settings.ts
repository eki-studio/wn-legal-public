import { COLORS } from '$/eki.config'
import { array, color, string, text, url } from '@/sanity/lib'
import { defineField } from 'sanity'
import { displayMode } from '../constants/displayModes'

const colorArray = Object.values(COLORS)

const manifest = defineField({
  name: 'manifestFile',
  title: 'Manifest File',
  type: 'object',
  group: 'manifest',
  description:
    'https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json',
  fields: [
    string({
      name: 'manifestName',
      title: 'Manifest Name',
      type: 'string',
    }),
    string({
      name: 'manifestShortName',
      title: 'Manifest Short Name',
      type: 'string',
    }),
    url({
      name: 'manifestStartUrl',
      title: 'Start Url',
      type: 'url',
      description: 'Enter the url for the site o9r use a relative one like /',
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    string({
      name: 'manifestDisplayMode',
      title: 'DisplayMode',
      type: 'string',
      options: {
        list: displayMode,
      },
    }),
    text({
      name: 'manifestDescription',
      title: 'Description',
      type: 'text',
    }),
    color({
      name: 'manifestBgColor',
      title: 'Background Color',
      options: {
        colorList: colorArray,
      },
    }),
    color({
      name: 'manifestThemeColor',
      title: 'Theme Color',
      options: {
        colorList: colorArray,
      },
    }),
    array({
      name: 'manifestCategories',
      title: 'Categories',
      of: [
        {
          type: 'string',
          validation: (Rule) =>
            Rule.custom((value: string) => {
              if (value === value.toLowerCase()) {
                return true
              } else {
                return 'The string must be in lowercase.'
              }
            }),
        },
      ],

      description: 'Enter a list of categories relevant to this site.',
    }),
  ],
})

export default manifest
