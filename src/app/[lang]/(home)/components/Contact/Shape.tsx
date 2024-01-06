'use client'
import { MEDIA } from '$/eki.config'
import { ScrollTrigger, gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'
import { Box } from '@/components'
import { EkiRef } from '@/components/EKI/Eki/Eki.types'
import { useMedia } from '@/hooks'
import { useStorePreload } from '@/store'
import { useCallback, useEffect, useRef } from 'react'
import $ from './Contact.module.scss'

const Shape = () => {
  //Refs
  const comp = useRef<EkiRef>(null)
  const svgRef = useRef<any>(null)

  //Hooks
  const isDesktop = useMedia(MEDIA.desktop, true)

  //Stores
  const preloadAnim = useStorePreload.use.animationsStart()

  const normalized = useCallback((value: number) => {
    const halfWidth = window.innerWidth / 2
    return (value - halfWidth) / halfWidth
  }, [])

  useEffect(() => {
    if (!comp?.current?.tl || !preloadAnim || !isDesktop) return

    let ctx = gsap.matchMedia()
    ctx.add(
      MEDIA,
      (c) => {
        if (c?.conditions?.mobile) return
        const tl = comp?.current?.tl as gsap.core.Timeline
        gsap.registerPlugin(ScrollTrigger)

        const dataMove1 = svgRef.current.querySelector('[data-move-1]')
        const dataMove2 = svgRef.current.querySelector('[data-move-2]')
        const dataMove3 = svgRef.current.querySelector('[data-move-3]')
        const dataMove4 = svgRef.current.querySelector('[data-move-4]')
        tl.eventCallback('onComplete', () => {
          ScrollTrigger.observe({
            onMove: (self) => {
              const normalizedX = normalized(self.x as number)
              const normalizedY = normalized(self.y as number)
              const diagonal =
                Math.sqrt(
                  normalizedX * normalizedX + normalizedY * normalizedY
                ) * 60

              gsap.to(dataMove1, {
                xPercent: diagonal,
                yPercent: diagonal,
                duration: ANIM_VARS.duration.goldenRatio,
                delay: 0.25,
              })
              gsap.to(dataMove2, {
                xPercent: -diagonal,
                yPercent: -diagonal,
                duration: ANIM_VARS.duration.goldenRatio,
              })
              gsap.to(dataMove3, {
                xPercent: diagonal,
                yPercent: -diagonal,
                duration: ANIM_VARS.duration.goldenRatio,
                delay: 0.25,
              })
              gsap.to(dataMove4, {
                xPercent: -diagonal,
                yPercent: diagonal,
                duration: ANIM_VARS.duration.goldenRatio,
              })
            },
          })
        })
      },
      svgRef.current
    )
    return () => ctx.revert()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comp, isDesktop, preloadAnim])

  if (isDesktop) {
    return (
      <Box anim="draw-svg" className={$.shape} ref={comp} animRefresh>
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 729 822"
          fill="none"
          stroke="currentColor"
          className="hide-mobile"
        >
          <line x1="1.35355" y1="49.6464" x2="731.354" y2="779.646"></line>
          <line x1="0.646447" y1="779.646" x2="730.646" y2="49.6465"></line>
          <line x1="0.5" y1="822" x2="0.500036" y2="-2.18557e-08"></line>
          <line x1="1" y1="779.5" x2="730" y2="779.5"></line>
          <line x1="1" y1="49.5" x2="730" y2="49.4999"></line>
          <rect data-move-1 x="222.5" y="271.5" width="286" height="286"></rect>
          <rect data-move-2 x="222.5" y="271.5" width="286" height="286"></rect>
          <rect data-move-3 x="222.5" y="271.5" width="286" height="286"></rect>
          <rect data-move-4 x="222.5" y="271.5" width="286" height="286"></rect>
        </svg>
      </Box>
    )
  }
}

export default Shape
