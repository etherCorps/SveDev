import type { PageServerLoad } from './$types';
import { getMyAllArticles } from '$lib/devtoApi';

export const load = (async ({ setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	return {
		posts: getMyAllArticles()
	};
}) satisfies PageServerLoad;
