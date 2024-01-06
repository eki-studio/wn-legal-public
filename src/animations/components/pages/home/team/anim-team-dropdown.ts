import { ScrollTrigger, gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'
import { Anim } from '@/animations/types'

const anim_TeamDropdown = ({ tl, comp, id }: Anim) => {
  if (!comp.current) return
  gsap.registerPlugin(ScrollTrigger)
  const el = comp.current
  const content = '[data-content]'
  const icon = '[data-icon]'
  const iconLine = '[data-icon-line]'
  const iconLine2 = '[data-icon-line-2]'
  const btn = '[data-btn]'
  const image = '[data-image]'
  const wrap = '[data-wrap]'
  const contact = '[data-contact]'

  gsap.set([image, btn, wrap, contact], { autoAlpha: 0, y: '2rem' })

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
    .to(iconLine, { transformOrigin: '50% 50%', rotate: 90 }, '<')
    .to(iconLine2, { transformOrigin: '50% 50%', rotate: 180 }, '<')
    .to(content, { autoAlpha: 1, duration: 0 })
    .to([image, btn, wrap, contact], { autoAlpha: 1, y: 0, stagger: 0.1 }, '<')

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

export default anim_TeamDropdown
