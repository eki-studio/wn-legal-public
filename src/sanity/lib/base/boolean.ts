import { BooleanDefinition, defineField } from 'sanity'

export interface BooleanProps extends Omit<BooleanDefinition, 'type'> {
  name: string
  title?: string
  type?: 'boolean'
  group?: string
}

const boolean = ({ name, type = 'boolean', ...props }: BooleanProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default boolean
