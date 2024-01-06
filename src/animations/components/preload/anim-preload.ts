import { MotionPathPlugin, gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'

interface AnimPreload {
  context?: gsap.Context
  comp: any
  tl: any
  setAnimationStart: any
}

const anim_preload = ({ comp, tl, setAnimationStart }: AnimPreload) => {
  const el = comp.current
  if (!el) return
  gsap.registerPlugin(MotionPathPlugin)
  const logo = '[data-logo]'
  const path = '[data-path]'
  const follower1 = '[data-follower-1]'
  const follower2 = '[data-follower-2]'
  const lines = '[data-lines]'
  const inner = '[data-inner]'

  gsap.set(logo, { autoAlpha: 0 })

  tl.current = gsap.timeline()
  tl.current
    .to(logo, { autoAlpha: 1, duration: ANIM_VARS.duration.default })
    .from(lines, {
      height: 0,
      duration: ANIM_VARS.duration.goldenRatio * 2,
      ease: ANIM_VARS.ease.out,
    })
    .to(
      follower1,
      {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0.35,
          end: 1.95,
        },
        transformOrigin: '50% 50%',
        ease: ANIM_VARS.ease.none,
        duration: ANIM_VARS.duration.goldenRatio * 2,
      },
      '<'
    )
    .to(
      follower2,
      {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: -0.15,
          end: 1.45,
        },
        transformOrigin: '50% 50%',
        ease: ANIM_VARS.ease.none,
        duration: ANIM_VARS.duration.goldenRatio * 2,
      },
      '<'
    )

    .to(inner, {
      autoAlpha: 0,
      duration: ANIM_VARS.duration.default * 2,
      onComplete: () => {
        setAnimationStart(true)
      },
    })
    .to(el, { display: 'none', duration: 0 })
}

export default anim_preload
