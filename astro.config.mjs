import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig(({ command }) => ({
  site: 'https://jessica-hunter.com',
  integrations: [
    react(),
    markdoc(),
    ...(command === 'dev' ? [keystatic()] : []),
  ],
  output: 'static',
}));
