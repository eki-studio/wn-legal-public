import { MEDIA, USE } from '$/eki.config'
import { useStoreTheme } from '@/store'
import { useCallback } from 'react'
import { useMedia } from '..'

const useThemeSwitch = () => {
  const theme = useStoreTheme.use.theme()
  const setTheme = useStoreTheme.use.setTheme()
  const setThemeClick = useStoreTheme.use.setThemeClick()
  const darkTheme = useMedia(MEDIA.darkTheme)

  const handleThemeChange = useCallback(() => {
    if (USE.theme === false) return
    if (theme === 'auto') {
      if (darkTheme) {
        setTheme('light')
      } else {
        setTheme('dark')
      }
    } else {
      const switchTheme = theme === 'dark' ? 'light' : 'dark'
      setTheme(switchTheme)
    }
    setThemeClick()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  return handleThemeChange
}

export default useThemeSwitch
