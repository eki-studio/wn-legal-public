/**
 * This file exports the structure of the Sanity Studio. It defines the structure of the sidebar navigation, the pages, and the default document views.
 * @packageDocumentation
 */

import { ADMIN, i18n } from '$/eki.config'
import {
  AllSidesIcon,
  BorderBottomIcon,
  BorderTopIcon,
  CodeIcon,
  GearIcon,
  HomeIcon,
  Pencil2Icon,
  ReaderIcon,
  Share1Icon,
  ZoomInIcon,
} from '@radix-ui/react-icons'
import {
  DefaultDocumentNodeResolver,
  StructureBuilder,
  StructureResolver,
} from 'sanity/desk'
import { createListI18nItem } from '../i18n'

export const structureI18n: StructureResolver = (S) =>
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
                .child(
                  S.list()
                    .title('Seo')
                    .items([
                      S.documentTypeListItem('seo')
                        .title('All')
                        .icon(() => <Share1Icon width="1em" height="1em" />),
                      ...i18n.sanity.map(({ id, title }) =>
                        createListI18nItem(S, 'seo', id, title)
                      ),
                    ])
                ),
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
                .icon(() => <BorderTopIcon width="1em" height="1em" />)
                .child(
                  S.list()
                    .title('Header')
                    .items([
                      S.documentTypeListItem('header')
                        .title('All')
                        .icon(() => <BorderTopIcon width="1em" height="1em" />),
                      ...i18n.sanity.map(({ id, title }) =>
                        createListI18nItem(S, 'header', id, title)
                      ),
                    ])
                ),

              S.listItem()
                .title('Footer')
                .icon(() => <BorderBottomIcon width="1em" height="1em" />)
                .child(
                  S.list()
                    .title('Footer')
                    .items([
                      S.documentTypeListItem('footer')
                        .title('All')
                        .icon(() => (
                          <BorderBottomIcon width="1em" height="1em" />
                        )),
                      ...i18n.sanity.map(({ id, title }) =>
                        createListI18nItem(S, 'footer', id, title)
                      ),
                    ])
                ),

              S.listItem()
                .title('Cookie Banner')
                .icon(() => <ZoomInIcon width="1em" height="1em" />)
                .child(
                  S.list()
                    .title('Cookie Banner')
                    .items([
                      S.documentTypeListItem('cookieBanner')
                        .title('All')
                        .icon(() => <ZoomInIcon width="1em" height="1em" />),
                      ...i18n.sanity.map(({ id, title }) =>
                        createListI18nItem(S, 'cookieBanner', id, title)
                      ),
                    ])
                ),
            ])
        ),
      S.divider(),
      //Pages

      S.listItem()
        .title('Home')
        .icon(() => <HomeIcon width="1em" height="1em" />)
        .child(
          S.list()
            .title('Home')
            .items([
              S.documentTypeListItem('home')
                .title('All')
                .icon(() => <HomeIcon width="1em" height="1em" />),
              ...i18n.sanity.map(({ id, title }) =>
                createListI18nItem(S, 'home', id, title)
              ),
            ])
        ),

      //Policies
      S.listItem()
        .title('Policies')
        .icon(() => <ReaderIcon width="1em" height="1em" />)
        .child(
          S.list()
            .title('Policies')
            .items([
              S.documentTypeListItem('policy')
                .title('All')
                .icon(() => <ReaderIcon width="1em" height="1em" />),
              ...i18n.sanity.map(({ id, title }) =>
                createListI18nItem(S, 'policy', id, title)
              ),
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
