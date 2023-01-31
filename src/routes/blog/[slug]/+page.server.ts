import type { PageServerLoad } from './$types';
import { articleAPI, DevToUsername } from '$lib/constants';
import { getArticleBySlug } from '../../../lib/devtoApi';

export const load = (async ({ fetch, params, setHeaders }) => {
	return {
		post: getArticleBySlug(params.slug)
	};
}) satisfies PageServerLoad;
