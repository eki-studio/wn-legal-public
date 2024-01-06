'use client'

import { USE } from '$/eki.config'
import { useTheme } from '@/hooks'
import { memo, useRef } from 'react'

interface ThemeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
const Theme = ({ children }: ThemeProps) => {
  const themeRef = useRef<HTMLDivElement>(null)

  useTheme({ comp: themeRef })

  if (USE.theme === false) return <>{children}</>
  return (
    <div className="theme" data-theme data-theme-fallback ref={themeRef}>
      {children}
    </div>
  )
}

export default memo(Theme)
