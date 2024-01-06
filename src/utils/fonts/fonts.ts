import localFont from 'next/font/local'

const fontSwiss = localFont({
  src: [
    {
      path: './swiss-light.woff2',
      weight: '300',
    },
    {
      path: './swiss-regular.woff2',
      weight: '400',
    },
    {
      path: './swiss-medium.woff2',
      weight: '500',
    },
    {
      path: './swiss-bold.woff2',
      weight: '800',
    },
  ],
  variable: '--font-swiss',
  preload: true,
})

const fontOptima = localFont({
  src: [
    {
      path: './optima.woff2',
      weight: '400',
    },
  ],
  variable: '--font-optima',
  preload: true,
})

export { fontOptima, fontSwiss }
