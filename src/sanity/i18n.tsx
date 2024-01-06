import { USE, i18n } from '$/eki.config'
import { documentInternationalization } from '@sanity/document-internationalization'
import { DE, FR, IT, US } from 'country-flag-icons/react/3x2'
import { StructureBuilder } from 'sanity/desk'

export const documentsI18n: string[] = [
  'home',
  'seo',
  'header',
  'footer',
  'policy',
  'cookieBanner',
]

export function DocumentInternationalization() {
  if (USE.i18n) {
    return documentInternationalization({
      // Required configuration
      supportedLanguages: [...i18n.sanity],
      schemaTypes: documentsI18n,
      languageField: `lang`,
    })
  } else return () => []
}

export function createListI18nItem(
  S: StructureBuilder,
  _type: string,
  lang: string,
  title: string
) {
  let icon: any = undefined
  switch (lang) {
    case 'it':
      icon = <IT width="1em" height="1em" />
      break
    case 'de':
      icon = <DE width="1em" height="1em" />
      break
    case 'fr':
      icon = <FR width="1em" height="1em" />
      break
    case 'en':
      icon = <US width="1em" height="1em" />
      break
  }

  return S.listItem()
    .title(title)
    .icon(() => icon)
    .child(
      S.documentList()
        .title(`${title}`)
        .showIcons(false)
        .filter(`_type == "${_type}" && lang == "${lang}"`)
    )
}
