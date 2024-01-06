import { DrawSVGPlugin, ScrollTrigger, gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'
import { Anim } from '@/animations/types'

const anim_ServiceDropdown = ({ tl, comp, id }: Anim) => {
  if (!comp.current) return
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)
  const el = comp.current
  const content = '[data-content]'
  const icon = '[data-icon]'
  const iconLine = '[data-icon-line]'
  const iconLine2 = '[data-icon-line-2]'
  const text = '[data-text]'
  const svg =
    '[data-svg] line, [data-svg] path, [data-svg] rect, [data-svg] circle'
  gsap.set(content, { autoAlpha: 0 })
  gsap.set(text, { autoAlpha: 0, y: '2rem' })
  gsap.set(svg, { drawSVG: 0 })

  tl.current = []

  const tlOpen = gsap.timeline({
    paused: true,
    id: id,
    defaults: {
      duration: ANIM_VARS.duration.default,
      ease: ANIM_VARS.ease.out,
    },
    onComplete: () => {
      ScrollTrigger.refresh()
    },
    onReverseComplete: () => {
      ScrollTrigger.refresh()
    },
  })
  tlOpen
    .to(el, {
      height: 'auto',
    })
    .from(
      el,
      {
        backgroundColor: 'transparent',
        onComplete: function () {
          gsap.set(this.targets(), { clearProps: 'backgroundColor' })
        },
      },
      '<'
    )
    .to(iconLine, { transformOrigin: '50% 50%', rotate: 90 }, '<')
    .to(iconLine2, { transformOrigin: '50% 50%', rotate: 180 }, '<')
    .to(content, { autoAlpha: 1, duration: 0 })
    .to(text, { autoAlpha: 1, y: 0, stagger: 0.1 }, '<')
    .to(
      svg,
      {
        drawSVG: '100%',
        stagger: 0.1,
        duration: ANIM_VARS.duration.goldenRatio,
        ease: 'none',
      },
      '<'
    )

  const tlHover = gsap.timeline({
    paused: true,
    defaults: {
      duration: ANIM_VARS.duration.default,
      ease: ANIM_VARS.ease.out,
    },
  })
  tlHover.to(icon, { rotate: 90 })

  tl.current.push(tlOpen, tlHover)
}

export default anim_ServiceDropdown
