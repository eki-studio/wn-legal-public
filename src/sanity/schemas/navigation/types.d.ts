export interface QueryFooter {
  links: { url: string; name: string; _key: string }[]
  copyText: string
}

export interface QueryHeader {
  links: { url: string; name: string; _key: string }[]
}

export interface QueryCookieBanner {
  text: any
  buttonText: string
}
