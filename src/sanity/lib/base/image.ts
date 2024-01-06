import { ImageDefinition, defineField } from 'sanity'
export interface ImageProps extends Omit<ImageDefinition, 'type'> {
  name: string
  title?: string
  type?: 'image'
  group?: string
}

const image = ({ name, type = 'image', ...props }: ImageProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default image
