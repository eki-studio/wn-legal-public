import { Eki } from '@/components'
import { EkiProps, EkiRef } from '@/components/EKI/Eki/Eki.types'
import clsx from 'clsx'
import { forwardRef } from 'react'

interface SectionProps extends Omit<EkiProps, 'as'> {
  as?: 'div' | 'section' | 'article' | 'main' | 'footer' | 'aside' | 'nav'
}

const Section = forwardRef<EkiRef, SectionProps>(
  ({ as = 'section', className, ...props }, ref) => {
    return (
      <Eki
        as={as}
        ref={ref}
        className={clsx('section', className)}
        {...props}
      />
    )
  }
)

Section.displayName = 'Section'

export default Section
