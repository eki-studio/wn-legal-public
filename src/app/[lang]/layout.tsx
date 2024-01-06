import { DEBUG, Locale, USE, i18n } from '$/eki.config'
import { Cookie, Header, MainWrapper } from '@/components'
import Layout from '@/components/EKI/Layout/Layout'
import '@/styles/globals.scss'
import { fontOptima, fontSwiss } from '@/utils/fonts/fonts'
import { getSiteMeta } from '@/utils/metadata'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'

interface LayputProps {
  children: React.ReactNode
  params: { lang: Locale }
}

type GenerateMetadataProps = {
  params: { id: string; lang: Locale }
}

//Cache settings
export const dynamic = 'force-dynamic'
export const runtime = 'edge'
//export const revalidate = 86400

//Static paths
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  return await getSiteMeta({ params })
}

export default function RootLayout({ children, params }: LayputProps) {
  return (
    <html lang={params.lang}>
      <body className={`${fontOptima.variable} ${fontSwiss.variable}`}>
        <Layout>
          <Header lang={params.lang} />
          <div className="page-wrapper">
            <MainWrapper>{children}</MainWrapper>
          </div>
          <Cookie lang={params.lang} />
        </Layout>

        {USE.analytics && <Analytics debug={DEBUG.analytics} />}
      </body>
    </html>
  )
}
