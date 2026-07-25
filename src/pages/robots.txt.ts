import type { APIRoute } from 'astro';

/**
 * robots.txt。sitemap 網址由 astro.config.mjs 的 site 產生,
 * 之後換自訂網域時不需要再改這裡。
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = site ? new URL('sitemap-index.xml', site).href : '/sitemap-index.xml';

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
