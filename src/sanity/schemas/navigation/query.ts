import { groq } from 'next-sanity'

export const queryFooter = `*[_type == "footer" && lang == $lang][0]{links[]{name, url, _key}, copyText}`

export const queryHeader = `*[_type == "header" && lang == $lang][0]{links[]{name, url, _key}}`

export const queryCookieBanner = `*[_type == "cookieBanner" && lang == $lang][0]{text, buttonText}`

groq`*[_type == "header"]`
