import { GeopointDefinition, defineField } from 'sanity'

export interface GeoPointProps extends Omit<GeopointDefinition, 'type'> {
  name: string
  title?: string
  type?: 'geopoint'
  group?: string
}

const geopoint = ({ name, type = 'geopoint', ...props }: GeoPointProps) => {
  return defineField({
    name: name,
    type: type,
    ...props,
  })
}

export default geopoint
