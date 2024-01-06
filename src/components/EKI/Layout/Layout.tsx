'use client'

import { Modal } from '@/components'
import { useApp, useMoveCursor, useScrollBar } from '@/hooks'
import { useStorePreload } from '@/store'
import { memo, useLayoutEffect, useRef, useState } from 'react'
import Cursor from '../Cursor/Cursor'
import LenisScroll from '../LenisScroll/LenisScroll'
import Preload from '../Preload/Preload'
import ScrollBar from '../ScrollBar/ScrollBar'
import Theme from '../Theme/Theme'
import Transition from '../Transition/Transition'
import $ from './Layout.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  /* ---------------------------------- Refs ---------------------------------- */
  const cursorRef = useRef(null)
  const scrollBarRef = useRef<any>(null)

  /* --------------------------------- States --------------------------------- */
  const [isPreload, setIsPreload] = useState(true)
  /* --------------------------------- Stores --------------------------------- */
  const isStorePreload = useStorePreload.use.preload()

  /* ---------------------------------- Hooks --------------------------------- */
  //Cursor
  useMoveCursor(cursorRef)
  //ScrollBar
  useScrollBar(scrollBarRef)
  //App Hooks
  useApp()

  /* ------------------------------ LayoutEffects ----------------------------- */
  useLayoutEffect(() => {
    isStorePreload ? setIsPreload(true) : setIsPreload(false)
  }, [isStorePreload])

  return (
    <>
      <Theme>
        <Preload />
        <LenisScroll>
          <div className={$.layout} data-preload={isPreload}>
            {children}
          </div>
        </LenisScroll>
        <Modal />
        <ScrollBar ref={scrollBarRef} data-preload={isPreload} />
        <Cursor ref={cursorRef} data-preload={isPreload} />
        <Transition />
      </Theme>
    </>
  )
}

export default memo(Layout)
