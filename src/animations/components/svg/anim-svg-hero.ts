import { DrawSVGPlugin, ScrollTrigger, gsap } from '@/animations/config'
import { ANIM_DEFAULTS, ANIM_VARS } from '@/animations/defaults'
import { Anim } from '@/animations/types'
import { createContextVars } from '@/utils/animations'

const anim_SvgHero = ({ context, tl, comp, animVars, id }: Anim) => {
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
    const moveSmall = '[data-move-small]'
    const moveBig = '[data-move-big]'
    const movVertical = '[data-move-vertical]'
    const fill = '[data-fill]'
    const rotate = '[data-rotate]'
    gsap.set(fill, { fillOpacity: 0 })

    const tlShapes = gsap.timeline()
    tlShapes
      .to(
        moveSmall,
        {
          xPercent: 500,
          transformOrigin: 'center',
          duration: ANIM_VARS.duration.default * 7,
          repeat: -1,
          rotate: 360,
          repeatDelay: 0.25,
          ease: 'power2.inOut',
          yoyo: true,
        },
        'move'
      )
      .to(
        moveBig,
        {
          xPercent: -180,
          transformOrigin: 'center',
          duration: ANIM_VARS.duration.goldenRatio * 3,
          repeat: -1,
          rotate: -180,
          ease: ANIM_VARS.ease.out,
          yoyo: true,
        },
        'move'
      )
      .to(
        movVertical,
        {
          yPercent: -200,
          transformOrigin: 'center',
          duration: ANIM_VARS.duration.default * 7,
          repeat: -1,
          rotate: 180,

          ease: ANIM_VARS.ease.expoOut,
          yoyo: true,
        },
        'move'
      )
      .to(
        fill,
        {
          fillOpacity: 1,
          stagger: ANIM_VARS.duration.stagger,
          duration: ANIM_VARS.duration.default,
          ease: 'power2.out',
        },
        '<'
      )
      .to(
        rotate,
        {
          rotate: -360,
          transformOrigin: 'center',
          duration: 33 * ANIM_VARS.duration.default,
          repeat: -1,
          ease: 'none',
        },
        '<'
      )
    tl.current.add(tlShapes, 'move')
  }
}
export default anim_SvgHero
