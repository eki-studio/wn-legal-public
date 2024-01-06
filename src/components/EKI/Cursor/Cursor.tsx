'use client'

import { USE } from '$/eki.config'
import { gsap } from '@/animations/config'
import { ANIM_DEFAULTS } from '@/animations/defaults'
import { useHoverCursor } from '@/hooks'
import { useStoreCursor, useStoreTheme } from '@/store'
import useStore from '@/store/utils/useStore'
import clsx from 'clsx'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { ChevronLeft, ChevronRight, Moon, Sun } from 'react-feather'
import $ from './Cursor.module.scss'

const Cursor = forwardRef((props, ref) => {
  /* ---------------------------------- refs ---------------------------------- */

  const el = useRef<any>()
  const cursorAnimRef = useRef<any>()

  /* --------------------------------- Stores --------------------------------- */

  const hasMOved = useStoreCursor.use.hasMoved()
  const hoverDefault = useStoreCursor.use.hoverDefault()
  const hoverTheme = useStoreCursor.use.hoverTheme()
  const theme = useStore(useStoreTheme, (state) => state.theme)

  /* --------------------------- //API - move cursor -------------------------- */

  useImperativeHandle(
    ref,
    () => {
      if (USE.cursor === false) return
      // return our API
      const xTo = gsap.quickTo(el.current, 'x', ANIM_DEFAULTS.cursorMove)
      const yTo = gsap.quickTo(el.current, 'y', ANIM_DEFAULTS.cursorMove)

      return {
        moveTo(x: number, y: number) {
          xTo(x)
          yTo(y)
        },
      }
    },
    []
  )

  /* ---------------------------------- Hooks --------------------------------- */

  //Cursor
  useHoverCursor(cursorAnimRef)
  /* -------------------------------- Composers ------------------------------- */
  const dataHover = clsx(hoverDefault && 'default', hoverTheme && 'theme')

  return (
    USE.cursor && (
      <div
        className={clsx($.cursor, hasMOved && $.active)}
        ref={el}
        {...props}
        data-theme={theme}
      >
        <div ref={cursorAnimRef} data-hover={dataHover}>
          <div className={$.default} data-cursor-default />
          <div className={$.theme} data-cursor-theme>
            <Sun size={'100%'} fill="currentColor" data-sun />
            <Moon size={'100%'} fill="currentColor" data-moon />
          </div>
          <div className={$.cardWork} data-cursor-card-work>
            open
          </div>
          <div className={$.homeServices} data-cursor-home-services>
            <ChevronLeft size={'100%'} fill="currentColor" />
            scroll
            <ChevronRight size={'100%'} fill="currentColor" />
          </div>
        </div>
      </div>
    )
  )
})

Cursor.displayName = 'Cursor'

export default Cursor
