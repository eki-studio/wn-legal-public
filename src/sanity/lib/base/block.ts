import { BlockDefinition, defineField } from 'sanity'

export interface BlockProps extends Omit<BlockDefinition, 'type'> {
  name: string
  title?: string
  type?: 'block'
  group?: string
}

const block = ({ name, type = 'block', ...props }: BlockProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default block
