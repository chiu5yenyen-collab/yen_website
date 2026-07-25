export const profile = {
  bio: {
    zh: [
      '以漆為主要媒材,創作器物與立體作品。',
      '關注漆這個材料本身的時間性 —— 漆需要濕度與等待才會硬化,完成之後也仍會隨年月持續變化。作品完成的那一刻不是終點,而是它開始老去的起點。',
    ],
    en: [
      'Works primarily in urushi lacquer, making vessels and sculptural objects.',
      'The work is concerned with the time held inside the material — urushi hardens only with humidity and patience, and keeps changing for years afterwards. The moment a piece is finished is not an end but the beginning of its ageing.',
    ],
  },
  /**
   * 學歷 / 獲獎 / 典藏 —— 填入真實資料後才會顯示在 PROFILE 頁,空陣列時整個區塊自動隱藏。
   * 格式:{ year: '2026', text: { zh: '中文說明', en: 'English text' } }
   */
  education: [] as CvItem[],
  awards: [] as CvItem[],
  collections: [] as CvItem[],
};

type CvItem = { year: string; text: { zh: string; en: string } };
