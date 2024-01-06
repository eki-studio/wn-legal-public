'use client'
import { EkiLink } from '@/components'
import { EkiLinkProps, EkiRef } from '@/components/EKI/Eki/Eki.types'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import React, { ForwardedRef } from 'react'
import $ from './Link_.module.scss'

interface Link_Props extends EkiLinkProps {}

const Link_ = React.forwardRef(
  (props: Link_Props, ref: ForwardedRef<EkiRef>) => {
    const pathName = usePathname()

    const classComposer = clsx(
      $.link,
      props.className,
      pathName === props.href && $.active
    )
    return (
      <EkiLink {...props} ref={ref} className={classComposer}>
        {props.children}
      </EkiLink>
    )
  }
)

Link_.displayName = 'Link_'

export default Link_
