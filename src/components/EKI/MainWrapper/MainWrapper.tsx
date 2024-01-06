import { memo } from 'react'

interface MainWrapperProps {
  children: React.ReactNode
}

const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <>
      <main className="main-wrapper" data-main-wrapper>
        {children}
      </main>
      <aside className="page-wrapper-lines">
        <div className="page-wrapper-lines_inner" />
      </aside>
    </>
  )
}

export default memo(MainWrapper)
