import { ReactLenisOptions } from '@studio-freight/react-lenis'

export const COLORS = {
  primary: '#292929',
  secondary: '#F5F5F5',
  strokeDark: '#E0E0E0',
  strokeLight: '#8F8F8F',
  goldDark: '#B69554',
  goldLight: '#D4C19B',
  redDark: '#A06A6A',
  redLight: '#BF9B9B',
  blueDark: '#787CA5',
  blueLight: '#B6B8CE',
  greenDark: '#73827A',
  greenLight: '#B3BCB7',
  accent: '#bc4749',
  grey: '#999999',
  stroke: '#000000',
}

export const EKI_CONFIG = {
  env: process.env.NEXT_PUBLIC_ENV,
  theme: {
    dark: {
      primary: COLORS.primary,
      secondary: COLORS.secondary,
      gold: COLORS.goldDark,
      green: COLORS.greenDark,
      red: COLORS.redDark,
      blue: COLORS.blueDark,
      grey: COLORS.grey,
      accent: COLORS.accent,
      stroke: COLORS.secondary,
    },
    light: {
      primary: COLORS.secondary,
      secondary: COLORS.primary,
      gold: COLORS.goldLight,
      green: COLORS.greenLight,
      red: COLORS.redLight,
      blue: COLORS.blueLight,
      grey: COLORS.grey,
      accent: COLORS.accent,
      stroke: COLORS.grey,
    },
  },
  media: {
    lightTheme: '(prefers-color-scheme: light)',
    darkTheme: '(prefers-color-scheme: dark)',
    mobile: `(max-width: 767px)`,
    desktop: `(min-width: 768px)`,
  },
  anim: {
    preload: {
      freeze: false,
    },
  },
  use: {
    analytics: false,
    animation: true,
    theme: true,
    cursor: true,
    lenis: true,
    scrollBar: true,
    preload: true,
    transition: false,
    i18n: true, // if use change (WEB) with [lang]
  },
  lenis: { lerp: 0.03 } as ReactLenisOptions,
  debug: {
    analytics: false,
    animation: false,
    theme: false,
    cursor: false,
    lenis: false,
    scrollBar: false,
    preload: false,
    transition: true,
  },

  admin: {
    title: 'WN Legal',
    id: 'wn-legal',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || '',
    projectId: process.env.NEXT_PUBLIC_SANITY_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '',
    basePath: '/admin',
    googleAPIKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
    mapBoxAPIKey: process.env.NEXT_PUBLIC_MAPBOX_API_KEY || '',
    formSpree: process.env.NEXT_PUBLIC_FORMSPREE || '',
  },
  route: {
    home: '/',
    about: '/about',
    contact: '/contact',
  },
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'de', 'fr', 'en'],
    routes: { it: '/it', de: '/de', fr: '/fr', en: 'en' },
    sanity: [
      { id: 'it', title: 'Italian' },
      { id: 'de', title: 'German' },
      { id: 'fr', title: 'French' },
      { id: 'en', title: 'English' },
    ],
  } as const,
}
export const ADMIN = EKI_CONFIG.admin
export const ENV = EKI_CONFIG.env
export const MEDIA = EKI_CONFIG.media
export const THEME = EKI_CONFIG.theme
export const DEBUG = EKI_CONFIG.debug
export const USE = EKI_CONFIG.use
export const ROUTE = EKI_CONFIG.route
export const EKI_ANIM = EKI_CONFIG.anim
export const i18n = EKI_CONFIG.i18n
export type Locale = (typeof i18n)['locales'][number]
