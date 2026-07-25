export type Lang = 'zh' | 'en';

export const site = {
  /** 創作者姓名 */
  name: { zh: 'Yen', en: 'Yen' },
  /** 身份定位(顯示在頁首與首頁) */
  role: { zh: '漆藝創作者', en: 'Lacquer Artist' },
  /** 留空則頁尾與 CONTACT 頁不顯示 email */
  email: '',
  instagram: '',
  facebook: '',
  youtube: '',
  /** SEO 用的網站描述 */
  description: {
    zh: '漆藝創作者作品集 — 漆、木胎、螺鈿、蒔繪與礦物顏料的當代創作。',
    en: 'Portfolio of a contemporary lacquer artist — urushi, wood core, raden, maki-e and mineral pigments.',
  },
} as const;
