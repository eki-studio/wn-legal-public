import { memo } from 'react'
import $ from '../Services.module.scss'

const Plus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    viewBox="0 0 128 128"
    fill="none"
    stroke="var(--secondary)"
    strokeWidth="var(--stroke-width)"
    data-icon
    className={$.plus}
  >
    <line x1="130" y1="65" x2="-1" y2="65" data-icon-line></line>
    <line x1="65" y1="-1" x2="65" y2="130" data-icon-line-2></line>
  </svg>
)

export default memo(Plus)
