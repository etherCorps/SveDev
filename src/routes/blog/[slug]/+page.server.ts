import type { PageServerLoad } from './$types';
import { articleAPI, DevToUsername } from '$lib/constants';
import { getArticleBySlug } from '../../../lib/devtoApi';

export const load = (async ({ params, setHeaders }) => {
	setHeaders({
		'Cache-Control': `public max-age=0, s-maxage=518400}`
	});
	return {
		post: getArticleBySlug(params.slug)
	};
}) satisfies PageServerLoad;
