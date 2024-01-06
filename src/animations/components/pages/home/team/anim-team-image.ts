import { gsap } from '@/animations/config'
import { Anim } from '@/animations/types'
import { createContextVars } from '@/utils/animations'

const anim_TeamImage = ({ context, tl, comp, animVars, id }: Anim) => {
  if (!comp.current || context?.conditions?.mobile) return

  const image2 = '[data-image-2]'
  gsap.set(image2, { autoAlpha: 0 })
  tl.current = gsap.to(image2, {
    id: id,
    autoAlpha: 1,
    paused: true,

    ...createContextVars(context, animVars),
  })
}

export default anim_TeamImage
