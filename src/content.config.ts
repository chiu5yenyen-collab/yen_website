import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/** 作品 — 每件作品一個 .md 檔,放在 src/content/works/ */
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.object({ zh: z.string(), en: z.string() }),
      year: z.number(),
      materials: z.object({ zh: z.string(), en: z.string() }),
      dimensions: z.string(),
      /** 對應 src/content/series/ 的檔名 */
      series: z.string().optional(),
      cover: image(),
      images: z.array(image()).default([]),
      note: z.object({ zh: z.string(), en: z.string() }).optional(),
      featured: z.boolean().default(false),
      /** 同年份內的排序,數字小的在前 */
      order: z.number().default(99),
    }),
});

/** 創作系列 — 對應 STATEMENT 頁 */
const series = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/series' }),
  schema: z.object({
    title: z.object({ zh: z.string(), en: z.string() }),
    period: z.string().optional(),
    text: z.object({ zh: z.string(), en: z.string() }),
    order: z.number().default(99),
  }),
});

export const collections = { works, series };
