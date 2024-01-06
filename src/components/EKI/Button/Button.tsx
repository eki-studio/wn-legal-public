'use client'
import { EkiLink } from '@/components'
import { EkiLinkProps, EkiRef } from '@/components/EKI/Eki/Eki.types'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import React, { ForwardedRef } from 'react'
import $ from './Button.module.scss'

interface Button_props extends EkiLinkProps {
  icon?: boolean
}

const Button = React.forwardRef(
  ({ icon, ...props }: Button_props, ref: ForwardedRef<EkiRef>) => {
    const pathName = usePathname()

    const classComposer = clsx(
      $.button,
      icon && $.button_icon,
      props.className,
      pathName === props.href && $.active
    )
    return (
      <EkiLink {...props} ref={ref} className={classComposer}>
        {icon ? (
          <div className={$.icon_inner}>
            <svg
              className={$.icon}
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="currentColor" d="M0 0h12v12H0Z" />
            </svg>
            <div className={$.children}>{props.children}</div>
          </div>
        ) : (
          <>{props.children}</>
        )}
      </EkiLink>
    )
  }
)

Button.displayName = 'Button'

export default Button
