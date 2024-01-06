import { ScrollTrigger, SplitText, gsap } from '@/animations/config'
import { ANIM_DEFAULTS } from '@/animations/defaults'
import { Anim } from '@/animations/types'
import { createContextVars } from '@/utils/animations'

const anim_Title = ({ context, tl, comp, animVars, id }: Anim) => {
  if (!comp.current) return
  const el = comp.current
  gsap.registerPlugin(ScrollTrigger, SplitText)
  const split = new SplitText(el, ANIM_DEFAULTS.title.split)

  gsap.set(split.chars, ANIM_DEFAULTS.title.from)

  tl.current = gsap.to(split.chars, {
    ...ANIM_DEFAULTS.title.to,
    id: id,
    scrollTrigger: {
      trigger: el,
    },
    ...createContextVars(context, animVars),
  })
}

export default anim_Title
