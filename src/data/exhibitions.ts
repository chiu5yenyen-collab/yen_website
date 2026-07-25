export type ExhKind = 'solo' | 'group' | 'award';

export interface Exhibition {
  year: number;
  kind: ExhKind;
  title: { zh: string; en: string };
  venue: { zh: string; en: string };
}

/**
 * 展歷 —— 由新到舊,直接改這個陣列即可。
 * kind:'solo' 個展 / 'group' 聯展 / 'award' 獲獎
 * 空陣列時 EXHIBITIONS 頁只會顯示標題,不會有假資料。
 *
 * 範例:
 * {
 *   year: 2026,
 *   kind: 'solo',
 *   title: { zh: '展覽名稱', en: 'Exhibition Title' },
 *   venue: { zh: '城市・場館', en: 'Venue, City' },
 * },
 */
export const exhibitions: Exhibition[] = [];
