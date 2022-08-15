export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '62f9b46b6ae1936a53f6dd54',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3wd14x5z',
                  apiId: '1abbbcae-e3ee-4381-8fa7-72b54dfa9423'
                },
                {
                  buildHookId: '62f9b46b4a1d065f13c731de',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-w9hp6uxt',
                  apiId: '0c2137f2-64a7-4ec4-8eb5-e1fd4f0d19d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vagarwal1968/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-w9hp6uxt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
