import { UrlDefinition, defineField } from 'sanity'

export interface UrlProps extends Omit<UrlDefinition, 'type'> {
  name: string
  title?: string
  type?: 'url'
  group?: string
}

const url = ({ name, type = 'url', ...props }: UrlProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default url
