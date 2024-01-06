/**
 * This file exports the structure of the Sanity Studio. It defines the structure of the sidebar navigation, the pages, and the default document views.
 * @packageDocumentation
 */

import { ADMIN } from '$/eki.config'
import {
  AllSidesIcon,
  BookmarkIcon,
  BorderBottomIcon,
  BorderTopIcon,
  CodeIcon,
  GearIcon,
  HomeIcon,
  LayersIcon,
  Pencil2Icon,
  ReaderIcon,
  Share1Icon,
} from '@radix-ui/react-icons'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import {
  DefaultDocumentNodeResolver,
  StructureBuilder,
  StructureResolver,
} from 'sanity/desk'

export const structureDefault: StructureResolver = (S, context) =>
  S.list()
    .id(ADMIN.id)
    .title(ADMIN.title)
    .items([
      //Settings
      S.listItem()
        .title('Settings')
        .icon(() => <GearIcon width="1em" height="1em" />)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('SEO')
                .icon(() => <Share1Icon width="1em" height="1em" />)
                .child(S.document().title('Seo').schemaType('seo')),
            ])
        ),
      //Navigation
      S.listItem()
        .title('Navigation')
        .icon(() => <AllSidesIcon width="1em" height="1em" />)
        .child(
          S.list()
            .title('Navigation')
            .items([
              S.listItem()
                .title('Header')
                .icon(() => <BorderTopIcon width="1em" height="1em" />),
              S.listItem()
                .title('Footer')
                .icon(() => <BorderBottomIcon width="1em" height="1em" />),
            ])
        ),
      S.divider(),
      //Pages
      S.listItem()
        .title('Pages')
        .icon(() => <LayersIcon width="1em" height="1em" />)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(() => <HomeIcon width="1em" height="1em" />)
                .child(S.document().title('Home').schemaType('home')),
            ])
        ),
      //Articles
      S.listItem()
        .title('Articles')
        .icon(() => <ReaderIcon width="1em" height="1em" />)
        .child(
          S.list()
            .title('Articles')
            .items([
              orderableDocumentListDeskItem({
                type: 'article',
                icon: () => <ReaderIcon width="1em" height="1em" />,
                title: 'Articles',
                S,
                context,
              }),
              S.documentTypeListItem('category')
                .title('Categories')
                .icon(() => <BookmarkIcon width="1em" height="1em" />),
            ])
        ),
    ])

//Default Document views
export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S: StructureBuilder
) => {
  return S.document().views([
    //Form view
    S.view.form().icon(() => <Pencil2Icon />),

    //Json view
    S.view
      .component(({ document }: any) => (
        <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
      ))
      .title('View JSON')
      .icon(() => <CodeIcon />),
  ])
}
