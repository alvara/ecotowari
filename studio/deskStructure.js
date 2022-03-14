import S from '@sanity/desk-tool/structure-builder'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) => !['page', 'route', 'site-config', 'home-page', 'contact-page'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Ecotowari Site')
    .items([
      S.listItem().title('Home Page').child(S.document().schemaType('home-page').documentId('home-page')),
      S.listItem().title('Contact Page').child(S.document().schemaType('contact-page').documentId('contact-page')),
      S.documentListItem().id('global-config').schemaType('site-config').title('Global Config'),
      // S.documentTypeListItem('route').title('Routes'),
      // ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
