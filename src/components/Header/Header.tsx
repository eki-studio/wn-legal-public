import { Locale } from '$/eki.config'
import { client } from '@/sanity/client'
import { queryHeader } from '@/sanity/schemas/navigation/query'
import { QueryHeader } from '@/sanity/schemas/navigation/types'
import clsx from 'clsx'
import $ from './Header.module.scss'
import Inner from './components/Inner'

interface HeaderProps {
  lang: Locale
}

const Header = async ({ lang }: HeaderProps) => {
  const wrapperComposer = clsx('main-wrapper', $.wrapper)
  const DATA = await client.fetch<QueryHeader>(queryHeader, { lang })

  return (
    <header className={$.header}>
      <div className={wrapperComposer}>
        <div className="container">
          <Inner lang={lang} data={DATA} />
        </div>
      </div>
    </header>
  )
}

export default Header
