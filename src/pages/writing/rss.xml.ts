import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { listedInOrder, writingTitle } from '../../lib/listing';

// Same channel text and items as the old site's feed: the listed posts, in listing order.
export const GET = async (context: APIContext) =>
  rss({
    title: 'Designer | YouTuber | Sketchnote artist | Writer',
    description:
      'Articles, videos, and resources on UX and UI design, product design, user experience design, design research, design career advice, productivity, and solopreneurship.',
    site: context.site!,
    // The site's URLs have no trailing slash; the rss package adds one by default.
    trailingSlash: false,
    items: (await listedInOrder('writing')).map((post) => ({
      title: writingTitle(post.data.title),
      link: `/writing/${post.id}`,
      description: post.data.summary,
      pubDate: post.data.date,
    })),
  });
