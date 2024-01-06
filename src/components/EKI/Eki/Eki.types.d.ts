import { AnimNames, TransitionNames } from '@/animations/types'
import { LenisInstance } from '@studio-freight/react-lenis'
import { LinkProps } from 'next/link'
/* eslint-disable no-undef, no-unused-vars */
export interface EkiProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  children?: React.ReactNode
  anim?: AnimNames
  animVars?: GSAPTweenVars
  animDeps?: any[]
  animRefresh?: boolean
  href?: string
  target?: string
  onMouseEnter?: ({ tl, lenis }: { tl?: any; lenis?: LenisInstance }) => void
  onMouseLeave?: ({ tl, lenis }: { tl?: any; lenis?: LenisInstance }) => void
  onClick?: ({ tl, lenis }: { tl?: any; lenis?: LenisInstance }) => void
}

export interface EkiRef {
  ekiRef: HTMLDivElement | HTMLAnchorElement | null
  anim?: AnimNames
  tl?: gsap.core.Timeline | gsap.core.Timeline[]
}

export interface EkiLinkProps extends LinkProps, EkiProps {
  delay?: number
  ariaLabel?: string
  transition?: TransitionNames
}

/* eslint-enable no-undef, no-unused-vars */
