import { type RequestHandler, text } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const robots = `User-agent: *\nSitemap: ${url.origin}/sitemap.xml`;
	return text(robots);
};
