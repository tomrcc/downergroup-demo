import site from '../../data/site.json';
import { getCollection } from 'astro:content';

import rss from '@astrojs/rss';
const posts = await getCollection('news');

export async function GET() {
  return rss({
    title: site.site_title,
    description: site.description,
    site: 'https://tiny-jackal.cloudvent.net',
    items: posts.map((post) => ({
      link: `/news/${post.slug}`,
      title: post.data.title,
      pubDate: post.data.date,
    })),
    customData: `<language>en-us</language>`,
  });
}
