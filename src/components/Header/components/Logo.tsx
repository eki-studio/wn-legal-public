'use client'

import { MotionPathPlugin, ScrollTrigger, gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'
import { memo, useEffect, useRef } from 'react'

const Logo = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

      const path = '[data-path]'
      const follower1 = '[data-follower-1]'
      const follower2 = '[data-follower-2]'
      gsap.to(follower1, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0.35,
          end: 1.95,
        },
        transformOrigin: '50% 50%',
        ease: ANIM_VARS.ease.out,
        scrollTrigger: {
          trigger: document.body,
          scrub: true,
        },
      })
      gsap.to(follower2, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: -0.15,
          end: 1.45,
        },
        transformOrigin: '50% 50%',
        ease: ANIM_VARS.ease.out,
        scrollTrigger: {
          trigger: document.body,
          scrub: true,
        },
      })
    }, [svgRef.current])

    return () => ctx.revert()
  }, [])

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 38"
      fill="none"
      width="100%"
    >
      <path
        d="M21.4498 12L17.5465 25.9405H17.0818L13.2156 15.7732L9.27509 25.9405H8.82899L5 12H6.65427L9.27509 21.6282L12.9926 12H13.4387L17.119 21.6468L19.7955 12H21.4498Z"
        fill="var(--secondary)"
      ></path>
      <path
        d="M34.7576 25.6059H34.2743L25.6498 15.7361V25.6059H24.0141V12H24.4974L33.1777 22V12H34.7576V25.6059Z"
        fill="var(--secondary)"
      ></path>
      <path
        data-path
        d="M1.5 0.5H38.5V37.5H1.5V0.5Z"
        stroke="var(--secondary)"
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
  )
}

export default memo(Logo)
