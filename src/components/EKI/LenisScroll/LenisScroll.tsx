'use client'

import { DEBUG, EKI_CONFIG, USE } from '$/eki.config'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

interface LenisScrollProps {
  children: React.ReactNode
}

const LenisScroll = ({ children }: LenisScrollProps) => {
  const lenis = useLenis((lenis) => {
    if (!USE.lenis) return
    if (DEBUG.lenis) {
      console.log('----------lenis debug---------')
      console.log('velocity', lenis.velocity)
      console.log('direction', lenis.direction)
      console.log('isScrolling', lenis.isScrolling)
      console.log('emitter', lenis.emitter)
      console.log('actualScroll	', lenis.actualScroll)
      console.log('velocity', lenis.velocity)
      console.log('isScrolling', lenis.isScrolling)
      console.log('isSmooth', lenis.isSmooth)
      console.log('isStopped', lenis.isStopped)
      console.log('progress', lenis.progress)
      console.log('scroll', lenis.scroll)
    }
  })

  const pathName = usePathname()
  useEffect(() => {
    lenis && lenis.scrollTo(0, { immediate: true })
    DEBUG.lenis && console.log('lenis scroll to 0')
  }, [pathName, lenis])

  return USE.lenis ? (
    <ReactLenis root options={EKI_CONFIG.lenis}>
      {children}
    </ReactLenis>
  ) : (
    <>{children}</>
  )
}

export default React.memo(LenisScroll)
