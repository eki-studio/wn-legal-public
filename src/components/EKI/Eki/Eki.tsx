'use client'

import { useAnimation } from '@/hooks'
import { useLenis } from '@studio-freight/react-lenis'
import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react'
import { EkiProps, EkiRef } from './Eki.types'

const Eki = forwardRef<EkiRef, EkiProps>(
  (
    {
      as: Component = 'div',
      onMouseEnter,
      onMouseLeave,
      onClick,
      anim,
      animVars,
      animDeps,
      animRefresh,
      ...props
    },
    ref
  ) => {
    //Refs
    const ekiRef = useRef<HTMLDivElement>(null)
    const tlRef = useRef<any>(null)

    //Hooks
    useAnimation({
      ref: ekiRef,
      tlRef: tlRef,
      anim: anim,
      refresh: animRefresh,
      animVars: animVars,
      deps: animDeps,
    })
    const lenis = useLenis()

    //Api
    useImperativeHandle(ref, () => ({
      ekiRef: ekiRef.current,
      anim: anim,
      tl: tlRef.current,
    }))

    //Handlers
    const handleMouseEnter = useCallback(
      (_e: React.MouseEvent) => {
        if (onMouseEnter) {
          onMouseEnter({ tl: tlRef.current, lenis: lenis })
        }
      },
      [onMouseEnter, lenis, tlRef]
    )

    const handleMouseLeave = useCallback(
      (_e: React.MouseEvent) => {
        if (onMouseLeave) {
          onMouseLeave({ tl: tlRef.current, lenis: lenis })
        }
      },
      [onMouseLeave, lenis, tlRef]
    )

    const handleClick = useCallback(
      (_e: React.MouseEvent) => {
        if (onClick) {
          onClick({ tl: tlRef.current, lenis: lenis })
        }
      },
      [onClick, lenis, tlRef]
    )

    return (
      <Component
        ref={ekiRef}
        {...props}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {props.children}
      </Component>
    )
  }
)

Eki.displayName = 'Eki'
export default memo(Eki)
