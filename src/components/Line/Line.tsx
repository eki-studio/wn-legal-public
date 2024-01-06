import clsx from 'clsx'
import { memo } from 'react'
import { Box } from '..'
import $ from './Line.module.scss'

import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface LineProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  position?: 'bottom' | 'top'
}

const Line = ({ position = 'bottom', className, ...props }: LineProps) => {
  const classComposer = clsx(
    position === 'bottom' ? $.bottom : $.top,
    $.line,
    className
  )

  return (
    <aside className={classComposer} {...props}>
      <Box anim="draw-svg" className={$.inner}>
        <svg width="100%">
          <line
            x1="0%"
            x2="100%"
            y1="0%"
            y2="0%"
            height={2}
            stroke="var(--stroke)"
            strokeWidth="var(--stroke-width)"
          ></line>
        </svg>
      </Box>
    </aside>
  )
}

export default memo(Line)
