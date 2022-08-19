import bcp47 from 'bcp47';

export default {
  name: 'contact-page',
  type: 'document',
  title: 'Contact Page',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      title: 'Header Section',
      name: 'headersection',
      description: 'This is the top header section that everyone sees when they first visit the website.',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'localeString'
        },
        {
          title: 'Subtitle',
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
      title: 'Form Section',
      name: 'formsection',
      description: 'This section contains the form that allows others to contact us',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'localeText'
        },
        {
          title: 'Content',
          name: 'content',
          type: 'localeText'
        }
      ]
    },
  ],
};
