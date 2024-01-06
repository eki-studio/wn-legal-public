'use client'

import { useAnimation, useRouteDelay } from '@/hooks'
import { useStoreTransition } from '@/store'
import { useLenis } from '@studio-freight/react-lenis'
import Link from 'next/link'
import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { EkiLinkProps, EkiRef } from './Eki.types'

const EkiLink = forwardRef<EkiRef, EkiLinkProps>(
  (
    {
      onMouseEnter,
      onMouseLeave,
      onClick,
      anim,
      animVars,
      animDeps,
      delay,
      transition,
      animRefresh,
      ...props
    },
    ref
  ) => {
    //Refs
    const ekiRef = useRef<HTMLAnchorElement>(null)
    const tlRef = useRef<any>(null)

    //States
    const [clickTransition, setClickTransition] = useState(false)

    //Stores
    const setTransitionName = useStoreTransition.use.setTransitionName()
    const setLinkRef = useStoreTransition.use.setLinkRef()
    const transitionDuration = useStoreTransition.use.transitionDuration()

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
    const setRouteDelay = useRouteDelay()

    //Effects
    useEffect(() => {
      // on click update vthe transition store with link ref and transition name
      if (!clickTransition) return
      setTransitionName(transition)
      setLinkRef(ekiRef.current as any)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clickTransition])

    useEffect(() => {
      //When the store is updated with transition timeline set the delay
      if (!transitionDuration || !clickTransition || !transition) return
      setRouteDelay(transitionDuration, props.href as string)
      setClickTransition(false)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transitionDuration, clickTransition])

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
          onMouseEnter({ tl: tlRef.current, lenis: lenis } as any)
        }
      },
      [onMouseEnter, lenis, tlRef]
    )

    const handleMouseLeave = useCallback(
      (_e: React.MouseEvent) => {
        if (onMouseLeave) {
          onMouseLeave({ tl: tlRef.current, lenis: lenis } as any)
        }
      },
      [onMouseLeave, lenis, tlRef]
    )

    const handleClick = useCallback(
      (_e: React.MouseEvent) => {
        if (onClick) {
          onClick({ tl: tlRef.current, lenis: lenis } as any)
        }
        if (delay) {
          _e.preventDefault()
          setRouteDelay(delay, props.href as string)
        }
        if (transition) {
          _e.preventDefault()
          setClickTransition(true)
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [onClick, lenis, tlRef]
    )

    return (
      <Link
        ref={ekiRef}
        {...props}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {props.children}
      </Link>
    )
  }
)

EkiLink.displayName = 'EkiLink'
export default memo(EkiLink)
