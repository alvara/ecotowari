import S from '@sanity/desk-tool/structure-builder'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) => !['page', 'route', 'site-config', 'home-page'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Ecotowari Site')
    .items([
      S.listItem().title('Home Page').child(S.document().schemaType('home-page').documentId('home-page')),
      S.documentListItem().id('global-config').schemaType('site-config').title('Global Config'),
      // S.documentTypeListItem('route').title('Routes'),
      // ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
