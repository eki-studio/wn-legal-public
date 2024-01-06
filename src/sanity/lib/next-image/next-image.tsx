import { InputInitialValue } from '@/sanity/components'
import { Flex, Stack, Text } from '@sanity/ui'
import { boolean, image, number, object, string } from '..'
import { ObjectProps } from '../types'

export interface NextImageProps extends Omit<ObjectProps, 'type' | 'fields'> {}

export const sizesInput = (props: any) => {
  return (
    <Stack style={{ gridColumn: 'span 3' }} space={2}>
      <Flex direction="column">
        <Text weight="semibold" size={1}></Text>
      </Flex>
      {props.renderDefault(props)}
    </Stack>
  )
}

const nextImage = ({ name, title, ...props }: NextImageProps) => {
  return object({
    name: name,
    title: title,
    ...props,
    options: { collapsible: true, collapsed: false },
    fields: [
      image({
        name: 'image',
        title: 'Image',
        options: { hotspot: true, metadata: ['blurhash'] },
      }),
      object({
        name: 'metadata',
        title: 'Metadata',
        description:
          'https://nextjs.org/docs/pages/api-reference/components/image',
        options: { columns: 3, collapsible: true, collapsed: false },
        fields: [
          string({
            name: 'alt',
            title: 'Alt',
            initialValue: 'decorative',
            components: {
              input: InputInitialValue,
            },
          }),
          number({ name: 'width', title: 'Width' }),
          number({ name: 'height', title: 'Height' }),
          number({ name: 'quality', title: 'Quality' }),
          string({
            name: 'placeholder',
            title: 'Placeholder',
            options: { list: ['blur', 'empty'] },
          }),
          string({
            name: 'loading',
            title: 'Loading',
            options: { list: ['lazy', 'eager'] },
          }),

          boolean({
            name: 'objectFit',
            title: 'Object Fit',
          }),
          boolean({ name: 'fill', title: 'Fill' }),
          boolean({ name: 'priority', title: 'Priority' }),
          boolean({
            name: 'lqip',
            description: 'Low Quality Image Placeholder',
            title: 'lqip(exp)',
            components: {
              field: (props: any) => (
                <div style={{ alignSelf: 'end', gridColumn: 'span 3' }}>
                  {props.renderDefault(props)}
                </div>
              ),
            },
          }),
          string({
            name: 'sizes',
            title: 'Sizes',
            initialValue: '(max-width: 768px) 100vw, 33vw',
            components: {
              field: sizesInput,
              input: InputInitialValue,
            },
          }),
        ],
      }),
    ],
  })
}

export default nextImage
