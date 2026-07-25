// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 上線後把 site 改成你的正式網址(Netlify 會給一組 *.netlify.app,或你自己的網域)
export default defineConfig({
  site: 'https://lacquer-site.netlify.app',
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
    routing: {
      prefixDefaultLocale: false, // 中文在根目錄 /,英文在 /en/
    },
  },
  compressHTML: true,
  integrations: [sitemap()],
});
