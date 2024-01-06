'use client'

import { DEBUG, MEDIA, USE } from '$/eki.config'
import { gsap } from '@/animations/config'
import { ANIM_DEFAULTS } from '@/animations/defaults'
import { useGsap } from '@/hooks'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import $ from './ScrollBar.module.scss'

const ScrollBar = forwardRef((props, ref) => {
  const scrollBarRef = useRef<any>()
  const scrollRef = useRef<any>()
  const tl = useRef<gsap.core.Timeline>()
  let ctx = useGsap().matchMedia(scrollBarRef.current)

  useImperativeHandle(ref, () => {
    if (USE.scrollBar === false) return
    if (DEBUG.scrollBar) {
      console.log('----------scrollBar debug---------')
      console.log('scrollBarRef.current', scrollBarRef.current)
      console.log('scrollRef.current', scrollRef.current)
    }

    //const xTo = gsap.quickTo(scrollRef.current, 'x', animDefaultScrollBarMove)
    //const yTo = gsap.quickTo(scrollRef.current, 'y', animDefaultScrollBarMove)

    return {
      // eslint-disable-next-line no-unused-vars
      moveTo(x: number, rotate: number) {
        ctx.add(MEDIA.desktop, (desktop) => {
          if (desktop) {
            tl.current = gsap.timeline()
            tl.current
              .to(scrollRef.current, {
                left: x,
                ...ANIM_DEFAULTS.scrollBar,
              })
              .to('[data-square]', { rotate: rotate }, '<')
          }
        })
      },
    }
  })
  if (USE.scrollBar === false) return null
  return (
    <div className={$.scrollBar} {...props} ref={scrollBarRef}>
      <div className={$.wrap}>
        <div className={$.inner}>
          <div className={$.scroller} ref={scrollRef}>
            <div className={$.square} data-square />
          </div>
        </div>
      </div>
    </div>
  )
})

ScrollBar.displayName = 'ScrollBar'
export default React.memo(ScrollBar)
