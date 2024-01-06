'use client'

import { MEDIA } from '$/eki.config'
import { Box } from '@/components'
import { useMedia } from '@/hooks'
import $ from './Contact.module.scss'
const Svg = () => {
  const isDesktop = useMedia(MEDIA.desktop, true)

  if (isDesktop) {
    return (
      <Box anim="draw-svg" className={$.svg_desktop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 711 309"
          fill="none"
          stroke="currentColor"
        >
          <line y1="308.5" x2="711" y2="308.5"></line>
          <line x1="265.5" y1="309" x2="265.5" y2="-5.89091e-09"></line>
          <line x1="266" y1="162.5" x2="711" y2="162.5"></line>
        </svg>
      </Box>
    )
  } else {
    return (
      <Box anim="draw-svg" className={$.svg_mobile}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 400 310"
          fill="none"
          stroke="currentColor"
          className="hide-desktop"
        >
          <line y1="309.5" x2="400" y2="309.5"></line>
          <line x1="149.148" y1="310" x2="149.148" y2="1"></line>
          <line x1="149.648" y1="163.5" x2="400" y2="163.5"></line>
          <line y1="0.5" x2="400" y2="0.5"></line>
        </svg>
      </Box>
    )
  }
}

export default Svg
