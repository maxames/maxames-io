import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';

import { spectreDark } from './src/ec-theme';

const {
  GISCUS_REPO,
  GISCUS_REPO_ID,
  GISCUS_CATEGORY,
  GISCUS_CATEGORY_ID,
  GISCUS_MAPPING,
  GISCUS_STRICT,
  GISCUS_REACTIONS_ENABLED,
  GISCUS_EMIT_METADATA,
  GISCUS_LANG
} = loadEnv(process.env.NODE_ENV!, process.cwd(), "");

// https://astro.build/config
const config = defineConfig({
  site: 'https://maxames.io',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Max Ames',
      openGraph: {
        home: {
          title: 'Max Ames',
          description: 'My place on the internet.'
        },
        articles: {
          title: 'Articles',
          description: 'Explore my writings.'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: false
    })
  ]
});

export default config;
