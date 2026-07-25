export type ExhKind = 'solo' | 'group' | 'award';

export interface Exhibition {
  year: number;
  kind: ExhKind;
  title: { zh: string; en: string };
  venue: { zh: string; en: string };
}

/** 由新到舊,直接改這個陣列即可 */
export const exhibitions: Exhibition[] = [
  {
    year: 2025,
    kind: 'solo',
    title: { zh: '和合而生 — 個展', en: 'Born in Harmony — Solo Exhibition' },
    venue: { zh: '台北・某某藝廊', en: 'Gallery Example, Taipei' },
  },
  {
    year: 2025,
    kind: 'group',
    title: { zh: '亞洲漆藝三年展', en: 'Asian Lacquer Triennial' },
    venue: { zh: '金澤・石川縣立美術館', en: 'Ishikawa Prefectural Museum, Kanazawa' },
  },
  {
    year: 2024,
    kind: 'group',
    title: { zh: '工藝的當代性', en: 'Craft in the Present Tense' },
    venue: { zh: '台中・國立台灣工藝研究發展中心', en: 'NTCRI, Taichung' },
  },
  {
    year: 2024,
    kind: 'award',
    title: { zh: '台灣工藝競賽 — 入選', en: 'Taiwan Craft Competition — Selected' },
    venue: { zh: '國立台灣工藝研究發展中心', en: 'NTCRI' },
  },
  {
    year: 2023,
    kind: 'solo',
    title: { zh: '層積 — 個展', en: 'Strata — Solo Exhibition' },
    venue: { zh: '台南・某某空間', en: 'Space Example, Tainan' },
  },
  {
    year: 2022,
    kind: 'group',
    title: { zh: '漆·物·語', en: 'Urushi, Object, Narrative' },
    venue: { zh: '京都・某某畫廊', en: 'Gallery Example, Kyoto' },
  },
];
