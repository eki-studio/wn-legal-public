import { ScrollTrigger, gsap } from '@/animations/config'
import { ANIM_DEFAULTS, ANIM_VARS } from '@/animations/defaults'
import { Anim } from '@/animations/types'
import { createContextVars } from '@/utils/animations'

const anim_FooterLinks = ({ context, tl, comp, animVars, id }: Anim) => {
  if (!comp.current) return
  const links = '[data-link]'

  gsap.registerPlugin(ScrollTrigger)

  tl.current = gsap.fromTo(links, ANIM_DEFAULTS.fadeIn.from, {
    id: id,
    ...ANIM_DEFAULTS.fadeIn.to,
    stagger: ANIM_VARS.duration.stagger,
    scrollTrigger: { trigger: comp.current },
    ...createContextVars(context, animVars),
  })
}

export default anim_FooterLinks
