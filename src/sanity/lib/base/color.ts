import { COLORS } from '$/eki.config'
import { ColorDefinition } from '@sanity/color-input'
import { defineField } from 'sanity'

export interface ColorProps extends Omit<ColorDefinition, 'type'> {
  name: string
  title?: string
  type?: 'color'
  group?: string
}

const color = ({ name, type = 'color', ...props }: ColorProps) => {
  return defineField({
    name: name,
    type: type,
    options: {
      colorList: Object.values(COLORS),
      ...props.options,
    },
    ...props,
  })
}

export default color
