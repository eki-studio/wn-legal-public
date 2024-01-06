'use client'

import { DEBUG, EKI_ANIM, MEDIA } from '$/eki.config'
import anim_preload from '@/animations/components/preload/anim-preload'
import { useGsapMatchMedia } from '@/hooks/gsap/_use-gsap-context'
import { useStorePreload } from '@/store'
import clsx from 'clsx'
import { useLayoutEffect, useRef, useState } from 'react'
import $ from './Preload.module.scss'

const Preload = () => {
  const comp = useRef<any>()
  const tl = useRef<any>()

  const isPreload = useStorePreload.use.preload()
  const setIsPreload = useStorePreload.use.setPreload()
  const setAnimationStart = useStorePreload.use.setAnimationsStart()
  const [displayPreload, setDisplayPreload] = useState(true)

  let ctx = useGsapMatchMedia(comp.current)
  useLayoutEffect(() => {
    if (!isPreload) {
      setDisplayPreload(false)
      setAnimationStart(true)
      if (DEBUG.preload) {
        console.log('--- debug Preload ---')
        console.log(useStorePreload.getState())
      }
      return
    }
    ctx.add(MEDIA, (c) => {
      anim_preload({
        context: c,
        tl: tl,
        comp: comp,
        setAnimationStart: setAnimationStart,
      })

      tl.current.eventCallback('onComplete', () => {
        if (EKI_ANIM.preload.freeze) return
        setIsPreload(false)
      })

      if (DEBUG.preload) {
        console.log('--- debug Preload ---')
        console.log(useStorePreload.getState())
        console.log(tl.current)
      }
    })
    return () => ctx.revert()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPreload])

  if (displayPreload) {
    return (
      <aside className={$.preload} ref={comp}>
        <div className={$.inner} data-inner>
          <svg
            className={$.logo}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 38"
            fill="none"
            width="100%"
            data-logo
          >
            <path
              d="M21.4498 12L17.5465 25.9405H17.0818L13.2156 15.7732L9.27509 25.9405H8.82899L5 12H6.65427L9.27509 21.6282L12.9926 12H13.4387L17.119 21.6468L19.7955 12H21.4498Z"
              fill="var(--stroke)"
            ></path>
            <path
              d="M34.7576 25.6059H34.2743L25.6498 15.7361V25.6059H24.0141V12H24.4974L33.1777 22V12H34.7576V25.6059Z"
              fill="var(--stroke)"
            ></path>
            <path
              data-path
              d="M1.5 0.5H38.5V37.5H1.5V0.5Z"
              stroke="var(--stroke)"
            ></path>
            <rect
              data-follower-1
              y="4"
              width="3"
              height="3"
              fill="var(--primary)"
            ></rect>
            <rect
              data-follower-2
              x="37"
              y="31"
              width="3"
              height="3"
              fill="var(--primary)"
            ></rect>
          </svg>
        </div>

        <aside className="page-wrapper-lines">
          <div
            className={clsx('page-wrapper-lines_inner', $.lines)}
            data-lines
          />
        </aside>
      </aside>
    )
  }
}

export default Preload
