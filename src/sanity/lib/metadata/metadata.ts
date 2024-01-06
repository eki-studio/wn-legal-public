import { array, image, object, string, text } from '..'
import { ObjectProps } from '../types'

interface MetadataProps extends Omit<ObjectProps, 'type' | 'fields' | 'name'> {}

const metadata = ({ ...props }: MetadataProps) => {
  return object({
    name: 'metadata',
    title: 'Metadata',
    type: 'object',
    description: 'Contains metadata information for page content.',
    group: props.group,
    groups: [
      { name: 'og', title: 'OpenGraph' },
      { name: 'keywords', title: 'Keywords' },
    ],
    ...props,
    fields: [
      string({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      text({
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3,
        description:
          'Describe the page, 155-300 characters is the optimal length.',
        validation: (Rule) => Rule.min(50).max(400),
      }),
      string({
        name: 'ogTitle',
        title: 'Open Graph Title',
        type: 'string',
        group: 'og',
      }),
      string({
        name: 'ogDescription',
        title: 'Open Graph Description',
        group: 'og',
        description:
          'Describe the page, 155-300 characters is the optimal length.',
        validation: (Rule) => Rule.min(50).max(400),
      }),
      image({
        name: 'ogImage',
        title: 'Open Graph Image',
        group: 'og',
        description:
          'Make sure your images are at least 1200px by 630px and have a 1.91:1 aspect ratio.',
      }),
      array({
        name: 'keywords',
        title: 'Keywords',
        of: [{ type: 'string' }],
        group: 'keywords',
        description: 'Enter a list of keywords relevant to this page.',
      }),
    ],
  })
}

export default metadata
