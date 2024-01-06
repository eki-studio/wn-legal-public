import { ScrollTrigger, gsap } from '@/animations/config'
import { ANIM_DEFAULTS, ANIM_VARS } from '@/animations/defaults'
import { Anim } from '@/animations/types'
import { createContextVars } from '@/utils/animations'

const anim_FadeIn = ({ context, tl, comp, animVars, id }: Anim) => {
  if (!comp.current) return
  const el = comp.current
  gsap.registerPlugin(ScrollTrigger)

  tl.current = gsap.fromTo(el, ANIM_DEFAULTS.fadeIn.from, {
    id: id,
    ...ANIM_DEFAULTS.fadeIn.to,
    scrollTrigger: { trigger: el },
    stagger: ANIM_VARS.duration.stagger,
    ...createContextVars(context, animVars),
  })
}

export default anim_FadeIn
