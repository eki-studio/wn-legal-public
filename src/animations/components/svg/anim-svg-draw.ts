import { DrawSVGPlugin, ScrollTrigger, gsap } from '@/animations/config'
import { ANIM_DEFAULTS, ANIM_VARS } from '@/animations/defaults'
import { Anim } from '@/animations/types'
import { createContextVars } from '@/utils/animations'

const anim_SvgDraw = ({ context, tl, comp, animVars, id }: Anim) => {
  if (!comp.current) return
  const el = comp.current
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)

  tl.current = gsap.timeline({
    scrollTrigger: { trigger: el, start: '-20% bottom', id: id },
  })

  tl.current
    .fromTo(ANIM_DEFAULTS.drawSvg.targets, ANIM_DEFAULTS.drawSvg.from, {
      ...ANIM_DEFAULTS.drawSvg.to,
      duration: (1 / ANIM_VARS.duration.default) * 1.33,
      ...createContextVars(context, animVars),
    })
    .addLabel('move')
}
export default anim_SvgDraw
