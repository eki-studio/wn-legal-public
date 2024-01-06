import { ObjectDefinition, defineField } from 'sanity'

export interface ObjectProps extends Omit<ObjectDefinition, 'type'> {
  name: string
  title?: string
  type?: 'object'
  group?: string
}

const object = ({ name, type = 'object', ...props }: ObjectProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default object
