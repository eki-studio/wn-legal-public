import { Locale } from '$/eki.config'
import { client } from '@/sanity/client'
import { queryCookieBanner } from '@/sanity/schemas/navigation/query'
import { QueryCookieBanner } from '@/sanity/schemas/navigation/types'
import { Suspense, memo } from 'react'
import Client from './Client'
const Cookie = async ({ lang }: { lang: Locale }) => {
  const DATA = await client.fetch<QueryCookieBanner>(queryCookieBanner, {
    lang: lang,
  })

  return (
    <Suspense>
      <Client data={DATA} />
    </Suspense>
  )
}

export default memo(Cookie)
