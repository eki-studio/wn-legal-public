import { array, block } from '..'
import { BlockProps } from '../types'

interface RichTextProps extends Omit<BlockProps, 'type'> {
  textOnly?: boolean
}

const richText = ({ title, name, textOnly, ...props }: RichTextProps) => {
  const style = textOnly ? [{ title: 'Normal', value: 'normal' }] : props.styles

  return array({
    title: title,
    name: name,
    of: [block({ name: 'block', styles: style, ...props })],
  })
}

export default richText
