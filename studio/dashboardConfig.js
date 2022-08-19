export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6225868a5b9c35bbe6ded5fa',
                  title: 'Sanity Studio',
                  name: 'ecotowari-studio',
                  apiId: 'c780ebde-678a-42ba-aa5f-39161a421434'
                },
                {
                  buildHookId: '6225868a32fd96a6b954b05e',
                  title: 'Landing pages Website',
                  name: 'ecotowari',
                  apiId: '88d31c0f-21f5-45e7-80d7-4c459f2db98f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alvara/ecotowari',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ecotowari.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
