import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// The blog archive as a feed. Paths mirror the dated URLs the archive has
// always used, so a feed reader and a search result land on the same page.
export async function GET(context) {
  const posts = (await getCollection('blog')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const path = (post) => {
    const d = post.data.date;
    return `/blog/${d.getUTCFullYear()}/${String(d.getUTCMonth() + 1).padStart(2, '0')}/${String(d.getUTCDate()).padStart(2, '0')}/${post.id}/`;
  };
  return rss({
    title: 'TROi — blog',
    description: 'Observations from independent architecture and organizational design work by Christoffer Råsten, Stockholm — the archive behind Organizational Flow.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? post.data.title,
      pubDate: post.data.date,
      link: path(post),
      categories: post.data.tags,
      author: 'christoffer.rasten@troi.se (Christoffer Råsten)',
    })),
    customData: '<language>en</language>',
  });
}
