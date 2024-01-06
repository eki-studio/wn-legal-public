import { gsap } from '@/animations/config'
import { useMemo } from 'react'

/**
 * Returns a memoized instance of the gsap context for the specified scope.
 * @param scope The scope for the gsap context.
 * @returns The memoized gsap context instance.
 */
export function useGsapContext(scope: any) {
  const ctx = useMemo(() => gsap.context(() => {}, scope), [scope])
  return ctx
}

/**
 * Returns a memoized instance of the gsap matchMedia for the specified scope.
 * @param scope The scope for the gsap matchMedia.
 * @returns The memoized gsap matchMedia instance.
 */
export function useGsapMatchMedia(scope: any) {
  const ctx = useMemo(() => gsap.matchMedia(scope), [scope])
  return ctx
}
