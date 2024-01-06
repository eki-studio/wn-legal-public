import { ArrayDefinition, defineField } from 'sanity'

export interface ArrayProps extends Omit<ArrayDefinition, 'type'> {
  name: string
  title?: string
  type?: 'array'
  group?: string
}

const array = ({ name, type = 'array', ...props }: ArrayProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default array
