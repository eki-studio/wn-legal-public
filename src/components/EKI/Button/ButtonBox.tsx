'use client'
import { Box, Eki } from '@/components'
import { EkiProps, EkiRef } from '@/components/EKI/Eki/Eki.types'
import { useStoreCursor } from '@/store'
import clsx from 'clsx'
import React, { ForwardedRef } from 'react'
import $ from './Button.module.scss'

interface ButtonBox_props extends EkiProps {
  icon?: boolean
  active?: boolean
  naked?: boolean
}

const ButtonBox = React.forwardRef(
  (
    { icon, active, naked, ...props }: ButtonBox_props,
    ref: ForwardedRef<EkiRef>
  ) => {
    const setHoverDefault = useStoreCursor.use.setHoverDefault()

    const classComposer = clsx(
      !naked && $.button,
      icon && $.button_icon,
      active && $.active,
      props.className
    )

    return (
      <Eki
        //@ts-ignore
        anim={`${icon ? 'btn-icon' : undefined}`}
        {...props}
        ref={ref}
        className={classComposer}
        onMouseEnter={({ tl }) => {
          tl && tl.play()
          setHoverDefault(true)
        }}
        onMouseLeave={({ tl }) => {
          tl && tl.reverse()
          setHoverDefault(false)
        }}
      >
        {icon ? (
          <Box className={$.icon_inner}>
            <svg
              data-icon
              className={$.icon}
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="currentColor" d="M0 0h12v12H0Z" />
            </svg>
            <div className={$.children}>{props.children}</div>
          </Box>
        ) : (
          <>{props.children}</>
        )}
      </Eki>
    )
  }
)

ButtonBox.displayName = 'ButtonBox'

export default ButtonBox
