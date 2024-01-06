import { Locale } from '$/eki.config'
import { client } from '@/sanity/client'
import { queryHome, queryHomeMeta } from '@/sanity/schemas/home/query'
import QueryHome from '@/sanity/schemas/home/types'
import { getMetadata } from '@/utils/metadata/metadata'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import About from './components/About/About'
import Hero from './components/Hero/Hero'

const Team = dynamic(() => import('./components/Team/Team'))
const Services = dynamic(() => import('./components/Services/Services'))
const Contact = dynamic(() => import('./components/Contact/Contact'))
const Footer = dynamic(() => import('@/components/Footer/Footer'))

interface PageProps {
  params: { lang: Locale }
}
//
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return await getMetadata(queryHomeMeta(params.lang), params)
}
export default async function Page({ params }: PageProps) {
  const DATA = await client.fetch<QueryHome>(queryHome, { lang: params.lang })

  return (
    <>
      <Hero data={DATA} />
      <About data={DATA} />
      <Team data={DATA} />
      <Services data={DATA} />
      <Contact data={DATA} />
      <Footer lang={params.lang} />
    </>
  )
}
