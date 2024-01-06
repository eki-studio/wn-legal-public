/**
 * Animates the default cursor on hover.
 *
 * @param context - The gsap context.
 * @param comp - The component reference.
 * @param tl - The mutable ref object for the gsap timeline.
 * @param theme - The theme of the cursor ('auto', 'dark', or 'light').
 */

import { THEME } from '$/eki.config'
import { gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'
import { AnimCursor } from '@/animations/types'

const cursor = '[data-cursor-default]'

const anim_CursorHoverDefault = ({ context, comp, tl }: AnimCursor) => {
  if (!context || !comp.current) return
  tl.current = gsap.timeline({ paused: true, id: 'cursor-default-hover' })
  tl.current.to(cursor, {
    scale: 1.5,
    backgroundColor: THEME.dark.accent,
    duration: ANIM_VARS.duration.default,
    ease: ANIM_VARS.ease.out,
  })
}

export default anim_CursorHoverDefault
