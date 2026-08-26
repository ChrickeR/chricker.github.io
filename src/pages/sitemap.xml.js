// Some crawlers and checkers only look for /sitemap.xml. The real sitemap is
// the index the sitemap integration writes; this points to it.
export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://troi.se/sitemap-0.xml</loc></sitemap></sitemapindex>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
