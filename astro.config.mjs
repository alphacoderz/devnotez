import { defineConfig } from 'astro/config';
import CMS from 'astro-netlify-cms';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    CMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main'
        },
        collections: [
          {
            name: 'note',
            label: 'Notes',
            folder: 'src/pages/note',
            create: true,
            delete: true,
            editor: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Note Name or Title' },
              { name: 'content', widget: 'markdown', label: 'Write Note' }
            ]
          }
        ]
      }
    })
  ]
});
