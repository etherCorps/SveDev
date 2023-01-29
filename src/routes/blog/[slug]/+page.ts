import type { PageLoad } from './$types';
import { articleAPI, DevToUsername } from '$lib/constants';

export const load = (async ({ fetch, params, setHeaders }) => {
	let currentArticle = await fetch(`${articleAPI}/${DevToUsername}/${params.slug}`, {
		headers: {
			Accept: 'application/vnd.forem.api-v1+json',
			'Content-Type': 'application/json'
		}
	});
	currentArticle = await currentArticle.json();
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=86400}`
	});
	return {
		post: currentArticle
	};
}) satisfies PageLoad;
