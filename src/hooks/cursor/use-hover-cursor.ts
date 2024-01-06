/**
 * Custom hook that handles the hover cursor functionality.
 *
 * @param cursorRef - Reference to the cursor element.
 */
import { DEBUG, MEDIA, USE } from '$/eki.config'
import anim_CursorCardWork from '@/animations/components/cursor/anim-cursor-hover-card-work'
import anim_CursorHoverDefault from '@/animations/components/cursor/anim-cursor-hover-default'
import anim_CursorHomeServices from '@/animations/components/cursor/anim-cursor-hover-home-services'
import anim_CursorHoverTheme from '@/animations/components/cursor/anim-cursor-hover-theme'
import { useGsap } from '@/hooks'
import { useStoreCursor, useStoreTheme } from '@/store'
import { useEffect, useRef } from 'react'

const useHoverCursor = (cursorRef: any) => {
  /* eslint-disable no-undef */
  const tl_default = useRef<gsap.core.Timeline | null>(null)
  const tl_theme = useRef<gsap.core.Timeline | null>(null)
  const tl_cardWork = useRef<gsap.core.Timeline | null>(null)
  const tl_homeServices = useRef<gsap.core.Timeline | null>(null)

  /* eslint-enable no-undef */

  //Access Stores
  const hoverDefault = useStoreCursor.use.hoverDefault()
  const hoverTheme = useStoreCursor.use.hoverTheme()
  const hoverCardWork = useStoreCursor.use.hoverCardWork()
  const hoverHomeServices = useStoreCursor.use.hoverHomeServices()
  const theme = useStoreTheme.use.theme()

  // Declare context
  const ctx = useGsap().matchMedia(cursorRef.current)
  DEBUG.cursor && console.log('Cursor Store', useStoreCursor.getState())
  //Declare anim Hovers
  useEffect(() => {
    if (USE.cursor === false || !cursorRef) return
    ctx.add(MEDIA.desktop, (c) => {
      anim_CursorHoverDefault({
        context: c,
        comp: cursorRef,
        tl: tl_default,
        theme: theme,
      })
      anim_CursorHoverTheme({
        context: c,
        comp: cursorRef,
        tl: tl_theme,
        theme: theme,
      })
      anim_CursorCardWork({
        context: c,
        comp: cursorRef,
        tl: tl_cardWork,
        theme: theme,
      })
      anim_CursorHomeServices({
        context: c,
        comp: cursorRef,
        tl: tl_homeServices,
        theme: theme,
      })
    })

    return () => ctx.revert()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursorRef])

  //Play anim Hovers
  useEffect(() => {
    DEBUG.cursor &&
      console.log('Cursor Store Hover Timeline Default', tl_default.current)
    if (!tl_default.current) return
    hoverDefault ? tl_default.current?.play() : tl_default.current?.reverse()
  }, [hoverDefault])

  useEffect(() => {
    DEBUG.cursor &&
      console.log('Cursor Store Hover Timeline Theme', tl_theme.current)
    if (!tl_theme.current) return
    hoverTheme ? tl_theme.current?.play() : tl_theme.current?.reverse()
  }, [hoverTheme])

  useEffect(() => {
    DEBUG.cursor &&
      console.log('Cursor Store Hover CardWork', tl_cardWork.current)
    if (!tl_cardWork.current) return
    hoverCardWork ? tl_cardWork.current?.play() : tl_cardWork.current?.reverse()
  }, [hoverCardWork])

  useEffect(() => {
    DEBUG.cursor &&
      console.log('Cursor Store Hover Home Services', tl_homeServices.current)
    if (!tl_homeServices.current) return
    hoverHomeServices
      ? tl_homeServices.current?.play()
      : tl_homeServices.current?.reverse()
  }, [hoverHomeServices])
}

export default useHoverCursor
