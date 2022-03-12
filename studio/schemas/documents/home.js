import bcp47 from 'bcp47';



export default {
  name: 'home-page',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'localeString'
        }
      ]
    }
  ],
};
