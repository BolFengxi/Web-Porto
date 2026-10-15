import { defineConfig } from 'vite';
import { portfolio } from './src/data/portfolio.js';
import { renderPage } from './scripts/render-page.js';

export default defineConfig({
  plugins: [
    {
      name: 'portfolio-static-html',
      transformIndexHtml: {
        order: 'pre',
        handler: (html) => renderPage(html, portfolio),
      },
    },
  ],
});
