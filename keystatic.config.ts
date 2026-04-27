import { config, fields, collection } from '@keystatic/core';

export default config({
  cloud: { project: 'jessica-hunter/jessica-hunter' },
  storage: {
    kind: 'github',
    repo: { owner: 'ntippie', name: 'jessica-hunter' },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
      },
    }),
  },
});
