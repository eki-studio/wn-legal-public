/**
 * Animates the theme change based on the provided dataTheme value.
 *
 * @param tl - The timeline object or mutable ref object.
 * @param dataTheme - The theme value ('dark' or 'light').
 * @param comp - The HTML comp element.
 */
import { THEME } from '$/eki.config'
import { gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'
import { MutableRefObject } from 'react'

//This animation is linked wit useThemeSettings hook

interface Anim {
  tl: gsap.core.Timeline | MutableRefObject<any>
  dataTheme: 'dark' | 'light' | 'auto'
  comp: HTMLElement | null
  context: gsap.Context
}

const varsToLightTheme = {
  '--primary': THEME.light.primary,
  '--secondary': THEME.light.secondary,
  '--stroke': THEME.light.stroke,
  '--accent': THEME.light.accent,
  '--green': THEME.light.green,
  '--red': THEME.light.red,
  '--blue': THEME.light.blue,
  '--yellow': THEME.light.gold,
}

const varsToDarkTheme = {
  '--primary': THEME.dark.primary,
  '--secondary': THEME.dark.secondary,
  '--stroke': THEME.dark.stroke,
  '--accent': THEME.dark.accent,
  '--green': THEME.dark.green,
  '--red': THEME.dark.red,
  '--blue': THEME.dark.blue,
  '--yellow': THEME.dark.gold,
}

const anim_Theme = ({ context, tl, dataTheme, comp }: Anim) => {
  const themeSwicther = '[data-theme-switcher]'

  if (
    dataTheme === 'dark' ||
    (dataTheme === 'auto' && context?.conditions?.darkTheme)
  ) {
    gsap.set(themeSwicther, { right: -1 })
    tl.current = gsap.timeline({
      paused: true,
      id: 'theme-dark-timeline',
      defaults: {
        ease: ANIM_VARS.ease.inOut,
        duration: ANIM_VARS.duration.default,
      },
    })
    tl.current
      .to(comp, varsToLightTheme)
      .to(themeSwicther, { right: 'auto' }, '<')
  } else if (
    dataTheme === 'light' ||
    (dataTheme === 'auto' && context?.conditions?.lightTheme)
  ) {
    gsap.set(themeSwicther, { right: 'auto' })
    tl.current = gsap.timeline({
      paused: true,
      id: 'theme-light-timeline',
      defaults: {
        ease: ANIM_VARS.ease.inOut,
        duration: ANIM_VARS.duration.default,
      },
    })
    tl.current.to(comp, varsToDarkTheme).to(themeSwicther, { right: 0 }, '<')
  }
}

export default anim_Theme
