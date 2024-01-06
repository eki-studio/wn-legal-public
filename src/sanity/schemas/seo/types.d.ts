export interface QuerySiteMetadata {
  title: string
  description: string
  author: string
  authorUrl: URL
  keywords: string[]
  lang: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  ogCanonicalURL: string
  ogSiteName: string
  ogType:
    | 'website'
    | 'article'
    | 'book'
    | 'profile'
    | 'music.song'
    | 'music.album'
    | 'music.playlist'
    | 'music.radio_station'
    | 'video.movie'
    | 'video.episode'
    | 'video.tv_show'
    | 'video.other'
    | undefined
}

export interface QueryManifest {
  manifestThemeColor: string
  manifestBgColor: string
  manifestName: string
  manifestShortName: string
  manifestStartUrl: string
  manifestDisplayMode:
    | 'fullscreen'
    | 'standalone'
    | 'minimal-ui'
    | 'browser'
    | undefined
  manifestDescription: string
  manifestCategories: string[]
}
