import RSS from 'rss';
import type { RequestHandler } from '@sveltejs/kit';

import { siteDescription, siteName } from '$lib/constants';
import { getMyAllArticles } from '$lib/devtoApi';

export const GET: RequestHandler = async ({ url }) => {
	const posts = await getMyAllArticles();

	const feed = new RSS({
		title: `${siteName} RSS Feed`,
		description: siteDescription,
		site_url: url.origin,
		feed_url: `${url.origin}rss.xml`
	});

	posts.forEach((post: any) =>
		feed.item({
			title: post.title,
			description: post.description,
			url: `${url.origin}/blog/${post.slug}`,
			date: post.published_timestamp
		})
	);

	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
		}
	});
};
