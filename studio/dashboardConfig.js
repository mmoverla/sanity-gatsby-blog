export default {
  widgets: [
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
                  buildHookId: '5e21b8372f7b42b27d44285b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7i2xaaj3',
                  apiId: '89a9f563-b141-45c0-89c2-2f7e864a7fa7'
                },
                {
                  buildHookId: '5e21b83718305eb95377e9e5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5x4p89fe',
                  apiId: 'fe2bd492-5738-40d5-a7c8-a7a3c80728f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mmoverla/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5x4p89fe.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
