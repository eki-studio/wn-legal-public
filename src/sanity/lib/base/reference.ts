import { ReferenceDefinition, defineField } from 'sanity'

export interface ReferenceProps extends Omit<ReferenceDefinition, 'type'> {
  name: string
  title?: string
  type?: 'reference'
  group?: string
}

const reference = ({ name, type = 'reference', ...props }: ReferenceProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default reference
