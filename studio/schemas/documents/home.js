import bcp47 from 'bcp47';

export default {
  name: 'home-page',
  type: 'document',
  title: 'Home Page',
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
          type: 'localeString'
        },
        {
          title: 'Button Text',
          description: 'What does the button say?',
          name: 'buttontext',
          type: 'localeString'
        },
        {
          title: 'Button URL Path',
          name: 'buttonpath',
          type: 'string'
        },

      ]
    }
  ],
};
