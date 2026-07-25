// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 正式網址。注意要用 production 網址,不是帶 deploy id 前綴的 permalink
// (例如 https://xxxxx--gregarious-kelpie-4935aa.netlify.app 那種只指向單次部署)。
// 之後接了自訂網域,改這一行即可。
export default defineConfig({
  site: 'https://gregarious-kelpie-4935aa.netlify.app',
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
