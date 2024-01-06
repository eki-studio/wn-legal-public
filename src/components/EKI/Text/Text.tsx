import { Eki } from '@/components'
import { EkiProps, EkiRef } from '@/components/EKI/Eki/Eki.types'
import { forwardRef } from 'react'

interface TextProps extends Omit<EkiProps, 'as'> {
  as?:
    | 'p'
    | 'span'
    | 'strong'
    | 'em'
    | 'mark'
    | 'small'
    | 'del'
    | 'ins'
    | 'sub'
    | 'sup'
}

const Text = forwardRef<EkiRef, TextProps>(({ as = 'p', ...props }, ref) => {
  return <Eki as={as} ref={ref} {...props} />
})

Text.displayName = 'Text'

export default Text
