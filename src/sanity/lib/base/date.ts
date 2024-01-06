import { DateDefinition, defineField } from 'sanity'

export interface DateProps extends Omit<DateDefinition, 'type'> {
  name: string
  title?: string
  type?: 'date'
  group?: string
}

const date = ({ name, type = 'date', ...props }: DateProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default date
