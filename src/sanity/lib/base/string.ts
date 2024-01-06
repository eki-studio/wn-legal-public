import { StringDefinition, defineField } from 'sanity'

export interface StringProps extends Omit<StringDefinition, 'type'> {
  name: string
  title?: string
  type?: 'string'
  group?: string
}

const string = ({ name, type = 'string', ...props }: StringProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default string
