'use client'

import { MEDIA } from '$/eki.config'
import { Box } from '@/components'
import { useMedia } from '@/hooks'
import $ from './Footer.module.scss'
const Svg = () => {
  const isDesktop = useMedia(MEDIA.desktop, true)

  if (isDesktop) {
    return (
      <Box anim="footer-svg" className={$.svg_desktop} animDeps={[isDesktop]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 1440 241"
          fill="none"
          stroke="var(--stroke)"
          className="hide-mobile"
        >
          <g data-circle-green>
            <circle
              cx="1314"
              cy="205"
              r="33.5"
              transform="rotate(-90 1314 205)"
              stroke="var(--green)"
            ></circle>
            <circle
              cx="1328"
              cy="225"
              r="8"
              transform="rotate(-90 1328 225)"
              fill="var(--green)"
            ></circle>
          </g>
          <line y1="0.5" x2="1440" y2="0.5"></line>
          <line x1="240" y1="120.5" x2="1355" y2="120.5"></line>
          <line x1="239.5" y1="241" x2="239.5" y2="1"></line>
          <line x1="1354.5" y1="241" x2="1354.5" y2="1"></line>
          <line x1="482.5" y1="121" x2="482.5" y2="1"></line>
          <line x1="719.5" y1="241" x2="719.5" y2="121"></line>
          <line y1="240.5" x2="1440" y2="240.5"></line>
          <g data-circle-red>
            <circle cx="520" cy="86" r="33.5" stroke="var(--red)"></circle>
            <circle
              cx="528"
              cy="70"
              r="8"
              transform="rotate(-90 528 70)"
              fill="var(--red)"
            ></circle>
          </g>
          <g data-circle-yellow>
            <circle
              cx="277"
              cy="85.5"
              r="33.5"
              transform="rotate(-90 277 85.5)"
              stroke="var(--yellow)"
            ></circle>
            <circle
              cx="281"
              cy="104"
              r="8"
              transform="rotate(-90 281 104)"
              fill="var(--yellow)"
            ></circle>
          </g>
          <g data-circle-blue>
            <circle cx="274" cy="206" r="33.5" stroke="var(--blue)"></circle>
            <circle
              cx="258"
              cy="218.5"
              r="8"
              transform="rotate(-90 258 218.5)"
              fill="var(--blue)"
            ></circle>
          </g>
        </svg>
      </Box>
    )
  } else {
    return (
      <Box anim="footer-svg" className={$.svg_mobile} animDeps={[isDesktop]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 400 171"
          fill="none"
          stroke="var(--stroke)"
          className="hide-desktop"
        >
          <line y1="0.5" x2="400" y2="0.5"></line>
          <line y1="170.5" x2="400" y2="170.5"></line>
          <line x1="167.5" y1="170" x2="167.5" y2="1"></line>
          <line x1="292.5" y1="170" x2="292.5" y2="-2.18557e-08"></line>
          <line x1="293" y1="84.5" x2="168" y2="84.5"></line>
          <line x1="399.995" y1="61.5" x2="292.995" y2="60.5"></line>
          <g data-rotate-1>
            <circle
              cx="92.4065"
              cy="158.319"
              r="9.38889"
              fill="var(--red)"
            ></circle>
            <path d="M165.535 85.5C165.535 131.9 128.582 169.5 83.0175 169.5C37.4527 169.5 0.5 131.9 0.5 85.5C0.5 39.0997 37.4527 1.5 83.0175 1.5C128.582 1.5 165.535 39.0997 165.535 85.5Z"></path>
          </g>
          <g data-rotate-2>
            <circle
              cx="6.03472"
              cy="6.03472"
              r="6.03472"
              transform="matrix(-1 0 0 1 396.028 100.211)"
              fill="var(--yellow)"
            ></circle>
            <path d="M293.5 115.688C293.5 145.416 317.174 169.5 346.36 169.5C375.545 169.5 399.219 145.416 399.219 115.688C399.219 85.9593 375.545 61.875 346.36 61.875C317.174 61.875 293.5 85.9593 293.5 115.688Z"></path>
          </g>
        </svg>
      </Box>
    )
  }
}

export default Svg
