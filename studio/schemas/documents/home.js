import bcp47 from 'bcp47';

export default {
  name: 'home-page',
  type: 'document',
  title: 'Home Page',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      title: 'Header Section',
      name: 'headersection',
      description: 'This is the top header section that everyone sees when they first visit the website.',
      type: 'object',
      fields: [
        {
          title: 'Header Title',
          name: 'title',
          type: 'localeString'
        },
        {
          title: 'Header Subtitle',
          name: 'subtitle',
          type: 'localeText'
        },
        {
          title: 'Button Text',
          name: 'buttontext',
          type: 'localeString'
        },
        {
          title: 'Button URL Path',
          name: 'buttonpath',
          type: 'string'
        },

      ]
    },
    {
      title: 'About Section',
      name: 'aboutsection',
      description: 'This section describes what Ecotowari is about in a single paragraph.',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'localeString'
        },
        {
          title: 'Content',
          name: 'content',
          type: 'localeText'
        }
      ]
    }
  ],
};
