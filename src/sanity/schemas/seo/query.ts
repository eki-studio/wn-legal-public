import { Locale } from '$/eki.config'
import { groq } from 'next-sanity'

groq`*[_type == "seo" ][0]{main, og}`
export const querySiteMetadata = groq`*[_type == "seo" ][0]{
  "author":main.author,
  "authorUrl":main.author,
  "description":main.description,
  "lang":main.lang,
  "title":main.title,
  "keywords":main.keywords,
  "ogCanonicalURL":og.ogCanonicalURL,
  "ogTitle":og.ogTitle,
  "ogDescription":og.ogDescription,
  "ogSiteName":og.ogSiteName,
  "ogImage":og.ogImage.asset->url,
  "ogType":og.ogType
  }`

export interface QuerySiteMetadataI18N {
  params: { lang: Locale }
}

export const querySiteMetadataI18N = ({
  params,
}: QuerySiteMetadataI18N) => `*[_type == "seo" && lang == "${params.lang}"][0]{
  "author":main.author,
  "authorUrl":main.author,
  "description":main.description,
  "lang":main.lang,
  "title":main.title,
  "keywords":main.keywords,
  "ogCanonicalURL":og.ogCanonicalURL,
  "ogTitle":og.ogTitle,
  "ogDescription":og.ogDescription,
  "ogSiteName":og.ogSiteName,
  "ogImage":og.ogImage.asset->url,
  "ogType":og.ogType
  }`

export const queryManifest = groq`*[_type == "seo"][0].manifestFile{
  manifestName,
  manifestShortName,
  manifestStartUrl,
  manifestDisplayMode,
  manifestDescription,
  manifestCategories,
  "manifestThemeColor" : manifestThemeColor.hex, 
  "manifestBgColor": manifestBgColor.hex,
  }`

export const queryManifestI18N = (
  locale: string
) => `*[_type == "seo" && lang == "${locale}"]{
  lang,
  manifestFile{
  manifestName,
  manifestShortName,
  manifestStartUrl,
  manifestDisplayMode,
  manifestDescription,
  manifestCategories,
  "manifestThemeColor" : manifestThemeColor.hex, 
  "manifestBgColor": manifestBgColor.hex,
  }`

groq`*[_type == "seo" ]{
  lang,
  manifestFile{
  manifestName,
  manifestShortName,
  manifestStartUrl,
  manifestDisplayMode,
  manifestDescription,
  manifestCategories,
  "manifestThemeColor" : manifestThemeColor.hex, 
  "manifestBgColor": manifestBgColor.hex,
  }}`
