import { MEDIA } from '$/eki.config'
import { ScrollTrigger, gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'
import { Box } from '@/components'
import { EkiRef } from '@/components/EKI/Eki/Eki.types'
import { useMedia } from '@/hooks'
import { useStorePreload } from '@/store'
import { useCallback, useEffect, useRef } from 'react'
import $ from '../Services.module.scss'
const ShapeDesktop = () => {
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

              gsap.to(dataMove1, {
                xPercent: normalizedX * 20,
                yPercent: normalizedY * 20,
                duration: ANIM_VARS.duration.goldenRatio,
                delay: 0.25,
              })
              gsap.to(dataMove2, {
                xPercent: normalizedX * -20,
                yPercent: normalizedY * -20,
                duration: ANIM_VARS.duration.goldenRatio,
              })
              gsap.to(dataMove3, {
                xPercent: normalizedX * -20,
                yPercent: normalizedY * 20,
                duration: ANIM_VARS.duration.goldenRatio,
                delay: 0.25,
              })
              gsap.to(dataMove4, {
                xPercent: normalizedX * 20,
                yPercent: normalizedY * -20,
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
  }, [isDesktop, comp, preloadAnim])

  return (
    <Box className={$.shape_desktop} ref={comp} anim="draw-svg" animRefresh>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 713 712"
        fill="none"
        stroke="currentColor"
        className="hide-mobile"
      >
        <line x1="357.5" y1="2.17945e-08" x2="357.5" y2="713"></line>
        <line x1="0.500031" y1="2.17945e-08" x2="0.5" y2="713"></line>
        <line y1="356" x2="714" y2="356"></line>
        <path
          data-move-1
          d="M597.5 356.001C597.5 488.914 489.601 596.662 356.5 596.662C223.399 596.662 115.5 488.914 115.5 356.001C115.5 223.087 223.399 115.339 356.5 115.339C489.601 115.339 597.5 223.087 597.5 356.001Z"
        ></path>
        <path
          data-move-2
          d="M597.5 356.001C597.5 488.914 489.601 596.662 356.5 596.662C223.399 596.662 115.5 488.914 115.5 356.001C115.5 223.087 223.399 115.339 356.5 115.339C489.601 115.339 597.5 223.087 597.5 356.001Z"
        ></path>
        <path
          data-move-3
          d="M597.5 356.001C597.5 488.914 489.601 596.662 356.5 596.662C223.399 596.662 115.5 488.914 115.5 356.001C115.5 223.087 223.399 115.339 356.5 115.339C489.601 115.339 597.5 223.087 597.5 356.001Z"
        ></path>
        <path
          data-move-4
          d="M597.5 356.001C597.5 488.914 489.601 596.662 356.5 596.662C223.399 596.662 115.5 488.914 115.5 356.001C115.5 223.087 223.399 115.339 356.5 115.339C489.601 115.339 597.5 223.087 597.5 356.001Z"
        ></path>
      </svg>
    </Box>
  )
}

export default ShapeDesktop
