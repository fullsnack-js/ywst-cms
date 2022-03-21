import S from '@sanity/desk-tool/structure-builder';
import resolveProductionUrl from './resolve-production-url';
import SocialPreview from 'part:social-preview/component';
import Iframe from 'sanity-plugin-iframe-pane';
import { getPreviewUrl } from './resolve-preview';
import { HomeIcon, MenuIcon } from '@sanity/icons';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import Blog from './blog-structure';

const defaultViews = [S.view.form()];
export const getDefaultDocumentNode = ({ schemaType, documentId }) => {
  // Conditionally return a different configuration based on the schema type
  switch (schemaType) {
    case 'route':
      return S.document()
        .id(documentId)
        .views([
          ...defaultViews,
          S.view
            .component(Iframe)
            .options({
              url: (doc) => resolveProductionUrl(doc),
            })
            .title('Preview'),
          S.view
            .component(
              SocialPreview({
                prepareFunction: (doc) => {
                  const { seo } = doc;
                  return {
                    title: seo?.title,
                    description: seo?.description,
                    ogImage: seo?.ogImage,
                    // || {
                    //   _ref: "",
                    // },
                    siteUrl: getPreviewUrl(doc).replace(/\/\/$/, '/'),
                    slug: doc?.slug?.current,
                  };
                },
              })
            )
            .title('Social & SEO'),
        ]);

    case 'person':
      return S.document()
        .id(documentId)
        .views([
          ...defaultViews,
          S.view
            .component(Iframe)
            .options({
              url: (doc) => resolveProductionUrl(doc),
            })
            .title('Preview'),
        ]);
    default:
      return S.document().id(documentId).views(defaultViews);
  }
};

const FilteredDocuments = (listItem) =>
  ![
    'media.tag',
    'route',
    'venue',
    'class',
    'post',
    'legal',
    'page',
    'globalSettings',
    'person',
    'category',
    // 'event',
  ].includes(listItem.getId());
export default () =>
  S.list()
    .title('YWST')
    .items([
      S.listItem()
        .title('Global Settings')
        .icon(MenuIcon)
        .child(
          S.editor().schemaType('globalSettings').documentId('global-settings')
        ),
      S.documentTypeListItem('page').title('Home Pages').schemaType('page'),
      S.documentTypeListItem('person').schemaType('person'),
      S.documentTypeListItem('route').schemaType('route'),
      S.documentTypeListItem('class').title('Classes'),
      S.documentTypeListItem('venue').title('Venues'),
      S.divider(),
      Blog(S),
      S.divider(),
      S.documentTypeListItem('legal')
        .title('Legal Terms & Conditions')
        .schemaType('legal'),
      ...S.documentTypeListItems().filter(FilteredDocuments),
    ]);
