import type { Lang } from '../data/site';

export const languages: Record<Lang, string> = {
  zh: '中文',
  en: 'EN',
};

export const ui = {
  zh: {
    'nav.home': '首頁',
    'nav.works': '作品',
    'nav.statement': '創作理念',
    'nav.exhibitions': '展歷',
    'nav.profile': '簡介',
    'nav.contact': '聯絡',
    'works.title': '作品',
    'works.sub': 'Works',
    'works.count': '件',
    'work.year': '年份',
    'work.materials': '材質',
    'work.dimensions': '尺寸',
    'work.series': '系列',
    'work.prev': '上一件',
    'work.next': '下一件',
    'work.back': '回作品列表',
    'statement.title': '創作理念',
    'statement.sub': 'Statement',
    'exhibitions.title': '展歷',
    'exhibitions.sub': 'Exhibitions',
    'exhibitions.solo': '個展',
    'exhibitions.group': '聯展',
    'exhibitions.award': '獲獎與典藏',
    'profile.title': '簡介',
    'profile.sub': 'Profile',
    'profile.education': '學經歷',
    'profile.awards': '獲獎',
    'profile.collections': '典藏',
    'contact.title': '聯絡',
    'contact.sub': 'Contact',
    'contact.email': 'Email',
    'contact.instagram': 'Instagram',
    'contact.facebook': 'Facebook',
    'contact.youtube': 'YouTube',
    'home.viewWorks': '瀏覽全部作品',
    'skip': '跳至主要內容',
  },
  en: {
    'nav.home': 'Home',
    'nav.works': 'Works',
    'nav.statement': 'Statement',
    'nav.exhibitions': 'Exhibitions',
    'nav.profile': 'Profile',
    'nav.contact': 'Contact',
    'works.title': 'Works',
    'works.sub': 'Selected pieces',
    'works.count': 'pieces',
    'work.year': 'Year',
    'work.materials': 'Materials',
    'work.dimensions': 'Dimensions',
    'work.series': 'Series',
    'work.prev': 'Previous',
    'work.next': 'Next',
    'work.back': 'Back to works',
    'statement.title': 'Statement',
    'statement.sub': 'On the work',
    'exhibitions.title': 'Exhibitions',
    'exhibitions.sub': 'Selected record',
    'exhibitions.solo': 'Solo',
    'exhibitions.group': 'Group',
    'exhibitions.award': 'Awards & Collections',
    'profile.title': 'Profile',
    'profile.sub': 'Biography',
    'profile.education': 'Education',
    'profile.awards': 'Awards',
    'profile.collections': 'Collections',
    'contact.title': 'Contact',
    'contact.sub': 'Get in touch',
    'contact.email': 'Email',
    'contact.instagram': 'Instagram',
    'contact.facebook': 'Facebook',
    'contact.youtube': 'YouTube',
    'home.viewWorks': 'View all works',
    'skip': 'Skip to content',
  },
} as const;

export type UIKey = keyof (typeof ui)['zh'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui.zh[key];
  };
}

/** 依語言產生路徑:中文在根目錄,英文加 /en 前綴 */
export function localizePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'zh' ? clean : `/en${clean === '/' ? '' : clean}`;
}
