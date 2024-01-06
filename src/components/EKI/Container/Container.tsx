import { Eki } from '@/components'
import { EkiProps, EkiRef } from '@/components/EKI/Eki/Eki.types'
import clsx from 'clsx'
import { forwardRef } from 'react'

interface ContainerProps extends Omit<EkiProps, 'as'> {
  as?: 'div' | 'section' | 'article' | 'main' | 'footer' | 'aside' | 'nav'
}

const Container = forwardRef<EkiRef, ContainerProps>(
  ({ as = 'div', className, ...props }, ref) => {
    return (
      <Eki
        as={as}
        ref={ref}
        className={clsx('container', className)}
        {...props}
      />
    )
  }
)

Container.displayName = 'Container'

export default Container
