import { gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'
import { Anim } from '@/animations/types'

const anim_ModalBtn = ({ context, tl, comp, id }: Anim) => {
  if (!comp.current || context?.conditions?.mobile) return
  const el = comp.current
  tl.current = gsap.to(el, {
    paused: true,
    id: id,
    rotate: 90,
    ease: ANIM_VARS.ease.out,
    duration: ANIM_VARS.duration.default,
  })
}

export default anim_ModalBtn
