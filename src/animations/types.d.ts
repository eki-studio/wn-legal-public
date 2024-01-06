/* eslint-disable no-undef */

import { EkiLinkRef } from 'COMP/EKI/Eki/Eki.types'

export type AnimNames =
  | 'fade-in'
  | 'title'
  | 'draw-svg'
  | 'team-image'
  | 'team-dropdown'
  | 'modal-btn'
  | 'service-dropdown'
  | 'footer-links'
  | 'hero-svg'
  | 'footer-svg'
  | 'btn-icon'

export type TransitionNames = 'fade' | 'card-work' | undefined

export interface Anim {
  context: gsap.Context
  tl: any
  comp: any
  animVars?: gsap.TweenVars
  id?: string
  theme?: 'dark' | 'light' | 'auto'
}

export interface GenerateAnim {
  comp: any
  tl: any
  anim?: AnimNames
  animVars?: gsap.TweenVars
  id: string
  context: gsap.Context
  theme?: 'dark' | 'light' | 'auto'
}

export interface GenerateTransition {
  context: gsap.Context
  tl: any
  transition: TransitionNames
  linkRef?: EkiLinkRef
}

export interface AnimCursor {
  context: gsap.Context //here i pass only the desktop
  comp: any
  tl: MutableRefObject<gsap.core.Timeline | null>
  theme?: 'dark' | 'light' | 'auto'
}
