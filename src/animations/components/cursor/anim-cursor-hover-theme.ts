/**
 * Animates the default cursor on hover.
 *
 * @param context - The gsap context.
 * @param comp - The component reference.
 * @param tl - The mutable ref object for the gsap timeline.
 * @param theme - The theme of the cursor ('auto', 'dark', or 'light').
 */

import { gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'
import { AnimCursor } from '@/animations/types'

const themCursor = '[data-cursor-theme]'
const cursor = '[data-cursor-default]'

const anim_CursorHoverTheme = ({ context, comp, tl }: AnimCursor) => {
  if (!context || !comp.current) return

  tl.current = gsap.timeline({
    paused: true,
    id: 'cursor-theme',
    defaults: {
      duration: ANIM_VARS.duration.default,
      ease: ANIM_VARS.ease.out,
    },
  })

  tl.current.to(cursor, { autoAlpha: 0 }).to(themCursor, { autoAlpha: 1 }, '<')
}

export default anim_CursorHoverTheme
