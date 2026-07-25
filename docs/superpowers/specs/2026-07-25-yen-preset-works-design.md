# 改名 Yen + 導入預設作品素材

日期:2026-07-25

## 目標

1. 網站創作者名稱改為 `Yen`(中英文皆同)。
2. 以 `src/assets/預設作品素材/` 的 5 張真實作品照取代原本的示範素材。
3. **不得更動任何作品照片的長寬比** —— 移除版面上所有強制裁切。

## 素材盤點

| 原檔 | 內容 | 尺寸 | 比例 |
|---|---|---|---|
| `LINE_ALBUM_2026724_260725_1.jpg` | 螺鈿+蒔繪 蜻蜓與葉(特寫) | 1567×1045 | 3:2 橫 |
| `LINE_ALBUM_2026724_260725_2.jpg` | 黑漆地 螺鈿蜻蜓 | 1567×1045 | 3:2 橫 |
| `LINE_ALBUM_2026724_260725_9.jpg` | 玉米串與蜻蜓 漆板 | 1815×902 | 2:1 寬幅 |
| `LINE_ALBUM_2026724_260725_11.jpg` | 貓形立體漆器(油桐花蒔繪) | 1108×1477 | 3:4 直 |
| `LINE_ALBUM_2026724_260725_12.jpg` | 圓蓋 油桐花螺鈿(俯視) | 1108×1477 | 3:4 直 |

三種不同比例並存,是本次版面調整的核心約束。

## 決策

- **名稱**:中英文版一律顯示 `Yen`。
- **分組**:5 張 → 3 件作品。
- **舊資料**:6 件示範作品與 3 個示範系列全部刪除,只保留真實作品。
- **列表排版**:齊高橫列(justified row)—— 圖高一致、寬度隨比例變化,比例完全不動。

## 實作範圍

### 1. 名稱

`src/data/site.ts` 的 `name` 改為 `{ zh: 'Yen', en: 'Yen' }`。

此值被 `Header.astro`、`Footer.astro`、`HomeView.astro`、`Base.astro`(SEO title / OG)、`ProfileView.astro`(人像 alt)共用,改一處即全站生效。

### 2. 素材檔案

複製(不移動,原檔保留於 `預設作品素材/`)至 `src/assets/works/`:

| 原檔 | 新檔名 |
|---|---|
| `_1.jpg` | `raden-dragonfly-01.jpg` |
| `_2.jpg` | `raden-dragonfly-02.jpg` |
| `_9.jpg` | `corn-panel-01.jpg` |
| `_11.jpg` | `tung-cat-01.jpg` |
| `_12.jpg` | `tung-cat-02.jpg` |

刪除 `src/assets/works/` 內 12 張示範圖與未被引用的 `hero.jpg`。

**保留 `portrait.jpg`** —— `ProfileView.astro:3` 以靜態 import 引用它,刪除會導致 build 失敗。

### 3. 作品內容

刪除 `src/content/works/` 現有 6 個 `.md`,新增 3 個:

| 檔名 | cover | images | featured |
|---|---|---|---|
| `corn-panel.md` | `corn-panel-01.jpg` | — | `true` |
| `raden-dragonfly.md` | `raden-dragonfly-01.jpg` | `raden-dragonfly-02.jpg` | `false` |
| `tung-cat.md` | `tung-cat-01.jpg` | `tung-cat-02.jpg` | `false` |

`corn-panel` 設為 featured,因為 2:1 寬幅在首頁滿版 hero 位置最好看。

**metadata 為暫定值。** 材質可由照片判讀(漆、螺鈿、蒔繪、木胎),但標題、年份、尺寸無從得知,需由作者後續填入真實資料。交付時須明列待填欄位。

### 4. 系列(STATEMENT 頁)

刪除 `harmony.md` / `light.md` / `strata.md`,新增 2 個對應實際作品的系列:

- `raden.md`(螺鈿)—— 對應 `corn-panel`、`raden-dragonfly`
- `tung.md`(油桐花)—— 對應 `tung-cat`

作品 frontmatter 的 `series` 欄位須對應到系列檔名,否則 `StatementView.astro:27` 的 `works.filter(w => w.data.series === s.id)` 會篩不到東西,系列下方縮圖區塊消失。

系列文案同為暫定,待作者改寫。

### 5. 版面:移除所有裁切(`src/styles/global.css`)

| 選擇器 | 現況 | 改為 |
|---|---|---|
| `.hero__img` | `aspect-ratio: 4/3` + `object-fit: cover` | `width: 100%; height: auto` |
| `.works-grid` | `display: grid` 等寬欄 | `display: flex; flex-wrap: wrap; align-items: flex-start` |
| `.work-card__img` | `aspect-ratio: 4/5` + `object-fit: cover` | `height: clamp(200px, 22vw, 300px); width: auto` |
| `.series__works` | grid 等寬欄 | 同 `.works-grid` 齊高橫列 |
| `.series__works img` | `aspect-ratio: 1/1` + `object-fit: cover` | 齊高、寬度自動 |
| `.work-detail__gallery img` | 已是 `width: 100%` 自然比例 | **不動** |
| `.profile__portrait img` | `aspect-ratio: 3/4` + `object-fit: cover` | **不動**(人像佔位圖,非作品照) |

**窄螢幕處理**:`max-width: 900px` 以下改回單欄直排(`width: 100%; height: auto`)。
固定高度搭配 `max-width: 100%` 會在容器變窄時擠壓比例,必須靠斷點避開,不能只靠 `max-width`。

## 驗收條件

- `npm run build` 成功,無 Astro image / content collection 錯誤。
- 首頁 hero 顯示 2:1 玉米串漆板,未被裁切。
- WORKS 列表三件作品圖高一致、寬度不同,無任何裁切。
- WORK 詳細頁兩張圖皆為原始比例。
- STATEMENT 頁兩個系列下方各自顯示對應作品縮圖。
- 頁首、頁尾、首頁大標、`<title>` 皆顯示 `Yen`。
- 手機寬度下版面單欄直排,不變形。

## 交付時須告知

一份「待填真實資料」清單:3 件作品的標題(中/英)、年份、尺寸、材質確認,以及 2 個系列的文案。
