import { TextDefinition, defineField } from 'sanity'

export interface TextProps extends Omit<TextDefinition, 'type'> {
  name: string
  title?: string
  type?: 'text'
  group?: string
}

const text = ({ name, type = 'text', ...props }: TextProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default text
