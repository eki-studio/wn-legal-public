import { Eki } from '@/components'
import { EkiProps, EkiRef } from '@/components/EKI/Eki/Eki.types'
import { forwardRef } from 'react'

export interface BoxProps extends Omit<EkiProps, 'as'> {
  as?: 'div' | 'section' | 'article' | 'main' | 'footer' | 'aside' | 'nav' | 'a'
}

const Box = forwardRef<EkiRef, BoxProps>(({ as = 'div', ...props }, ref) => {
  return <Eki as={as} ref={ref} {...props} />
})

Box.displayName = 'Box'

export default Box
