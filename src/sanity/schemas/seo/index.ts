import { i18Document } from '@/sanity/lib'
import { defineType } from 'sanity'
import main from './components/main.settings'
import manifest from './components/manifest.settings'
import og from './components/opengraph.settings'

const schemaSeo = defineType({
  name: 'seo',
  title: 'Seo',
  type: 'document',

  groups: [
    { name: 'main', title: 'Main' },
    { name: 'og', title: 'OpenGraph' },
    { name: 'manifest', title: 'Manifest' },
    { name: 'keywords', title: 'Keywords' },
  ],
  fields: [i18Document(), main, og, manifest],
})

export default schemaSeo
