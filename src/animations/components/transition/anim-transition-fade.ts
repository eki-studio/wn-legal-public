import { gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'
import { EkiRef } from '@/components/EKI/Eki/Eki.types'

interface AnimTransition {
  tl: any
  linkRef?: EkiRef
  context?: gsap.Context
}

const anim_transition_fade = ({ tl }: AnimTransition) => {
  const mainWrapper = document.querySelector('[data-main-wrapper]')
  const els = mainWrapper?.childNodes
  console.log('els', els)
  tl.current = gsap.timeline({ paused: true })
  tl.current.to(els, {
    autoAlpha: 0,
    duration: ANIM_VARS.duration.default / 2,
  } as gsap.TweenVars)
}

export default anim_transition_fade
