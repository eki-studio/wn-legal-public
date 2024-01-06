import { DEBUG, MEDIA, USE } from '$/eki.config'
import anim_Theme from '@/animations/components/theme/anim-theme'
import { useStoreTheme } from '@/store'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useGsapMatchMedia, useMedia } from '..'

interface UseThemeProps {
  comp: React.MutableRefObject<any>
}

const useTheme = ({ comp }: UseThemeProps) => {
  //Refs
  const tl = useRef<any>(null)

  //Stores
  const isClick = useStoreTheme.use.themeClick()
  const theme = useStoreTheme.getState().theme

  //Hooks
  let ctx = useGsapMatchMedia(comp.current)
  const mediaColorDark = useMedia(MEDIA.darkTheme)

  useLayoutEffect(() => {
    if (!comp.current || !theme || USE.theme === false) return

    comp.current.dataset.theme = theme
    if (theme === 'auto') {
      if (mediaColorDark) {
        comp.current.dataset.themeFallback = 'dark'
      } else {
        comp.current.dataset.themeFallback = 'light'
      }
    } else {
      comp.current.dataset.themeFallback = undefined
    }
    ctx.add(MEDIA, (c) => {
      anim_Theme({
        context: c,
        tl: tl,
        dataTheme: comp.current.dataset.theme,
        comp: comp.current,
      })
    })

    if (DEBUG.theme) {
      console.log('--------Debug Theme---------')
      console.log('comp.current', comp.current)
      console.log(useStoreTheme.getState())
      console.log(tl.current)
    }
    return () => {
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comp])

  useEffect(() => {
    if (!tl.current || USE.theme === false) return
    isClick ? tl.current.play() : tl?.current.reverse()
    DEBUG.theme && console.log(useStoreTheme.getState())
  }, [isClick])
}

export default useTheme
