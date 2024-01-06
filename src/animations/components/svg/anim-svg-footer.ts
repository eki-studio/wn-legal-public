import { DrawSVGPlugin, ScrollTrigger, gsap } from '@/animations/config'
import { ANIM_DEFAULTS, ANIM_VARS } from '@/animations/defaults'
import { Anim } from '@/animations/types'
import { createContextVars } from '@/utils/animations'

const anim_SvgFooter = ({ context, tl, comp, animVars, id }: Anim) => {
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

  if (context?.conditions?.desktop) {
    const circleYellow = el.querySelector('[data-circle-yellow]')
    const circleBlue = el.querySelector('[data-circle-blue]')
    const circleGreen = el.querySelector('[data-circle-green]')
    const circleRed = el.querySelector('[data-circle-red]')

    if (!circleYellow || !circleBlue || !circleGreen || !circleRed) return

    const tlShapes = gsap.timeline()
    tlShapes
      .to(
        circleYellow,
        {
          xPercent: 150,
          transformOrigin: 'center',
          duration: ANIM_VARS.duration.default * 7,
          repeat: -1,
          rotate: 135,

          ease: ANIM_VARS.ease.out,
          yoyo: true,
        },
        'move'
      )
      .to(
        circleRed,
        {
          xPercent: 1000,
          transformOrigin: 'center',
          duration: ANIM_VARS.duration.goldenRatio * 7,
          repeat: -1,
          rotate: 720,
          ease: ANIM_VARS.ease.out,
          yoyo: true,
        },
        'move'
      )
      .to(
        circleBlue,
        {
          xPercent: 400,
          transformOrigin: 'center',
          duration: ANIM_VARS.duration.default * 4,
          repeat: -1,
          rotate: 400,

          ease: ANIM_VARS.ease.out,
          yoyo: true,
        },
        'move'
      )
      .to(
        circleGreen,
        {
          xPercent: -750,
          transformOrigin: 'center',
          duration: ANIM_VARS.duration.goldenRatio * 4,
          repeat: -1,
          rotate: -720,
          ease: ANIM_VARS.ease.out,
          yoyo: true,
        },
        'move'
      )

    tl.current.add(tlShapes, 'move')
  }
}
export default anim_SvgFooter
