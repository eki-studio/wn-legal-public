import { FileDefinition, defineField } from 'sanity'

export interface FileProps extends Omit<FileDefinition, 'type'> {
  name: string
  title?: string
  type?: 'file'
  group?: string
}

const file = ({ name, type = 'file', ...props }: FileProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default file
