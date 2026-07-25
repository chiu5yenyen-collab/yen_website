export type Lang = 'zh' | 'en';

export const site = {
  /** 創作者姓名 */
  name: { zh: '林 某某', en: 'Mou-Mou Lin' },
  /** 身份定位(顯示在頁首與首頁) */
  role: { zh: '漆藝創作者', en: 'Lacquer Artist' },
  email: 'hello@example.com',
  instagram: 'https://www.instagram.com/your_account',
  facebook: '',
  youtube: '',
  /** SEO 用的網站描述 */
  description: {
    zh: '漆藝創作者作品集 — 漆、木胎、螺鈿、蒔繪與礦物顏料的當代創作。',
    en: 'Portfolio of a contemporary lacquer artist — urushi, wood core, raden, maki-e and mineral pigments.',
  },
} as const;
