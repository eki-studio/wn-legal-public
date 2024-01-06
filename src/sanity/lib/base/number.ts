import { NumberDefinition, defineField } from 'sanity'

export interface NumberProps extends Omit<NumberDefinition, 'type'> {
  name: string
  title?: string
  type?: 'number'
  group?: string
}

const number = ({ name, type = 'number', ...props }: NumberProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default number
