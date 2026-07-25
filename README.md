# 漆器創作者個人網站

Astro 7 靜態網站,中英雙語,可直接透過 GitHub + Netlify 部署。
設計依照 `lacquerware-site-spec.md`:極簡白底畫廊風,留白為主,作品說話。

---

## 一、本機執行

需要 Node.js 22 以上。

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 產出到 dist/
npm run preview  # 預覽 build 結果
```

---

## 二、部署到 Netlify(接 GitHub 自動更新)

### 1. 建立 GitHub repo

```bash
cd lacquer-site
git init
git add .
git commit -m "init: 漆器個人網站"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<repo名稱>.git
git push -u origin main
```

### 2. 連接 Netlify

1. 到 <https://app.netlify.com> → **Add new site** → **Import an existing project**
2. 選 **GitHub**,授權後挑剛才那個 repo
3. 建置設定會自動從 `netlify.toml` 讀取,確認為:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. 按 **Deploy** —— 約 1–2 分鐘後會給你一組 `xxx.netlify.app` 網址

之後只要 `git push`,Netlify 就會自動重新建置並上線。

### 3. 改掉網址設定(重要)

拿到正式網址後,打開 `astro.config.mjs`,把 `site` 改成你的網址:

```js
site: 'https://你的網址.netlify.app',
```

這會影響 canonical、hreflang 與 sitemap,對 SEO 有實質差別。改完再 push 一次。

### 4. (可選)綁自訂網域

Netlify → **Domain settings** → **Add a domain**,依指示改 DNS。
網域費用約 NT$400–600/年,Netlify 會自動配 HTTPS 憑證。

---

## 三、日常維護:三種常見修改

### A. 新增一件作品

1. 把照片放進 `src/assets/works/`(建議命名 `作品代號-01.jpg`、`-02.jpg`)
2. 在 `src/content/works/` 新增一個 `.md` 檔,檔名就是網址代號:

```yaml
---
title:
  zh: 和合而生-003
  en: Born in Harmony-003
year: 2026
materials:
  zh: 漆·木胎·螺鈿·礦物顏料
  en: urushi · wood core · raden · mineral pigments
dimensions: 30×28×25 cm
series: harmony          # 對應 src/content/series/ 的檔名,可省略
cover: ../../assets/works/harmony-003-01.jpg
images:
  - ../../assets/works/harmony-003-02.jpg
note:
  zh: 一句創作說明(可省略)
  en: One line about the piece (optional)
featured: true           # true 會出現在首頁
order: 1                 # 同年份的排序,數字小的在前
---
```

存檔即完成。年份分組、上下一件、系列連結、中英兩版頁面全部自動生成。

### B. 改基本資料

| 要改什麼 | 改哪個檔 |
|---|---|
| 姓名、身份、Email、Instagram、網站描述 | `src/data/site.ts` |
| 展歷(個展/聯展/獲獎典藏) | `src/data/exhibitions.ts` |
| 簡介、學經歷、獲獎、典藏 | `src/data/profile.ts` |
| 創作理念(每個系列一篇) | `src/content/series/*.md` |
| 選單、按鈕等介面文字(中英) | `src/i18n/ui.ts` |

### C. 調整視覺

色票與字體集中在 `src/styles/global.css` 最上方的 `:root`:

```css
--paper: #f7f5f1;      /* 背景 紙白 */
--ink: #1a1714;        /* 主文字 墨 */
--ink-soft: #8a837b;   /* 次要文字 淺墨 */
--rule: #e3ded6;       /* 分隔線 */
--vermilion: #9e3b29;  /* 點綴 朱 —— 刻意只留一個點綴色,用多了會跟作品的紅搶顏色 */
```

---

## 四、目前的佔位內容(上線前務必替換)

| 項目 | 位置 |
|---|---|
| **所有作品照片**(目前是程式生成的示意圖) | `src/assets/works/*.jpg` |
| **人像照** | `src/assets/works/portrait.jpg` |
| 姓名「林 某某」、Email、Instagram | `src/data/site.ts` |
| 6 件範例作品的名稱與說明 | `src/content/works/*.md` |
| 展歷、學經歷、獲獎典藏 | `src/data/exhibitions.ts`、`src/data/profile.ts` |

### 換照片時的注意事項

- **尺寸**:長邊 1600px 以上,Astro 會自動壓縮成 WebP 並產生多種尺寸的 srcset,不用自己壓
- **比例**:作品格會以 4:5 直式裁切,首頁大圖以 4:3 裁切 —— 拍攝時中央留些餘裕
- **打光**:柔光、素色背景,同一系列用一致的打光與背景,網頁排起來才整齊
- 至少留一張看得見漆面反光層次的角度

---

## 五、檔案結構

```
lacquer-site/
├─ astro.config.mjs        # 網站設定(site 網址、中英 i18n)
├─ netlify.toml            # Netlify 建置與快取設定
├─ src/
│  ├─ assets/works/        # 作品照片(會被自動最佳化)
│  ├─ content/
│  │  ├─ works/            # 每件作品一個 .md
│  │  └─ series/           # 每個創作系列一個 .md
│  ├─ data/                # 站台資料、展歷、簡介
│  ├─ i18n/ui.ts           # 中英介面字串
│  ├─ styles/global.css    # 設計系統(色票、字體、版面)
│  ├─ layouts/Base.astro   # 共用外框(SEO、字體、頁首頁尾)
│  ├─ components/          # Header / Footer / WorkCard
│  ├─ views/               # 各頁內容(中英共用同一份)
│  └─ pages/               # 路由:根目錄=中文,/en=英文
└─ dist/                   # build 產出(不進版控)
```

**中英雙語怎麼運作**:`src/pages/` 底下同一份 view 被中英兩組路由共用,只傳入不同的 `lang`。
所以新增一頁只要在 `src/views/` 寫一次內容,再到 `src/pages/` 與 `src/pages/en/` 各放一個三行的路由檔。

---

## 六、已內建

- 中英雙語(`/` 中文、`/en` 英文),含 hreflang 與 canonical
- 圖片自動最佳化(WebP、responsive srcset、lazy load)
- 換頁淡入(View Transitions)
- sitemap.xml 自動生成
- SEO meta / Open Graph
- 手機單欄版面、`prefers-reduced-motion` 支援、鍵盤操作焦點樣式
