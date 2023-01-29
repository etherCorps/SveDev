import type { PageLoad } from './$types';
import { articleAPI, DevToUsername } from '$lib/constants';

export const load = (async ({ fetch }) => {
	const userArticles = await (
		await fetch(`${articleAPI}?username=${DevToUsername}&per_page=5`, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
	).json();
	const firstArticle = userArticles.splice(0, 1);
	return {
		firstPost: firstArticle[0],
		articles: userArticles
	};
}) satisfies PageLoad;
