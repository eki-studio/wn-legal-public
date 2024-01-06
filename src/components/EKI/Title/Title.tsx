import { Eki } from '@/components'
import { EkiProps, EkiRef } from '@/components/EKI/Eki/Eki.types'
import { forwardRef } from 'react'

interface TitleProps extends Omit<EkiProps, 'as'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title = forwardRef<EkiRef, TitleProps>(({ as = 'h1', ...props }, ref) => {
  return <Eki as={as} ref={ref} {...props} />
})

Title.displayName = 'Title'

export default Title
