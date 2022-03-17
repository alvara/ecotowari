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
          title: 'Title',
          name: 'title',
          type: 'localeText'
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
    },
    {
      title: 'Environmental Impact Section',
      name: 'environmentsection',
      description: 'This section explains the impact of unsolicitied flyers on the environment.',
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
        },
        {
          title: 'Water Title',
          name: 'watertitle',
          type: 'localeString'
        },
        {
          title: 'Water',
          name: 'water',
          type: 'localeText'
        },
        {
          title: 'Electricity Title',
          name: 'electricitytitle',
          type: 'localeString'
        },
        {
          title: 'Electricity',
          name: 'electricity',
          type: 'localeText'
        },
        {
          title: 'Chemicals Title',
          name: 'chemicalstitle',
          type: 'localeString'
        },
        {
          title: 'Chemicals',
          name: 'chemicals',
          type: 'localeText'
        },
        {
          title: 'Wood Title',
          name: 'woodtitle',
          type: 'localeString'
        },
        {
          title: 'Wood',
          name: 'wood',
          type: 'localeText'
        }
      ]
    },
    {
      title: 'Statistics Section',
      name: 'statisticsection',
      description: 'This section reveals the success ecotowari stickers are having as of this moment',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'localeString'
        },
        {
          title: 'Section Summary',
          name: 'content',
          type: 'localeText'
        },
        {
          title: 'Total Stickers',
          name: 'totalstickers',
          type: 'localeString'
        },
        {
          title: 'water',
          name: 'water',
          type: 'localeString'
        },
        {
          title: 'electricity',
          name: 'electricity',
          type: 'localeString'
        },
        {
          title: 'co2',
          name: 'co2',
          type: 'localeString'
        },
        {
          title: 'flyers',
          name: 'flyers',
          type: 'localeString'
        },

      ]
    },
    {
      title: 'Get A Sticker Section',
      name: 'ctasection',
      description: 'This section is a call To action to direct users towards getting a sticker',
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
        },
        {
          title: 'Button Text',
          name: 'buttontext',
          type: 'localeString'
        }
      ]
    },
    {
      title: 'Follow Us Section',
      name: 'followsection',
      description: 'This section connects our visitors with our social networks and to see our latest activity.',
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
        },
        {
          title: 'Instagram Profile URL',
          name: 'instagram',
          type: 'url'
        },
        {
          title: 'Facebook Page URL',
          name: 'facebook',
          type: 'url'
        },
      ]
    }
  ],
};
