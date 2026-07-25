import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

/** 依年份新到舊、同年依 order 由小到大 */
export async function getSortedWorks(): Promise<CollectionEntry<'works'>[]> {
  const works = await getCollection('works');
  return works.sort((a, b) => b.data.year - a.data.year || a.data.order - b.data.order);
}

/** 依年份分組 */
export function groupByYear(works: CollectionEntry<'works'>[]) {
  const map = new Map<number, CollectionEntry<'works'>[]>();
  for (const w of works) {
    const list = map.get(w.data.year) ?? [];
    list.push(w);
    map.set(w.data.year, list);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
}
