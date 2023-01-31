import type { PageServerLoad } from './$types';
import { getMyAllArticles } from '../../lib/devtoApi';

export const load = (async () => {
	return {
		posts: getMyAllArticles()
	};
}) satisfies PageServerLoad;
