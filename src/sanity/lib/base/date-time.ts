import { DatetimeDefinition, defineField } from 'sanity'

export interface DateTimeProps extends Omit<DatetimeDefinition, 'type'> {
  name: string
  title?: string
  type?: 'datetime'
  group?: string
}

const dateTime = ({ name, type = 'datetime', ...props }: DateTimeProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default dateTime
