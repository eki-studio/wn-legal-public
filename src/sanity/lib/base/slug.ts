import { SlugDefinition, defineField } from 'sanity'

export interface SlugProps extends Omit<SlugDefinition, 'type'> {
  name: string
  title?: string
  type?: 'slug'
  group?: string
}

const slug = ({ name, type = 'slug', ...props }: SlugProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default slug
