import { gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'
import { Anim } from '@/animations/types'
import { createContextVars } from '@/utils/animations'

export const anim_btnIcon = ({ context, tl, comp, animVars, id }: Anim) => {
  if (!comp.current || context?.conditions?.mobile) return

  const icon = '[data-icon]'
  tl.current = gsap.timeline({ paused: true, id: id })
  tl.current.to(icon, {
    rotate: 45,
    duration: ANIM_VARS.duration.default,
    ease: ANIM_VARS.ease.out,
    ...createContextVars(context, animVars),
  })
}

export default anim_btnIcon
