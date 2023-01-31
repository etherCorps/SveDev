import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { dev } from '$app/environment';
import { getMyArticles } from '$lib/devtoApi';
// a.tag_list.forEach(tag => {
// 	categories.add(tag)
// });

const trendingArticles = async (articles: any) => {
	articles.sort((a: any, b: any) => {
		return b.page_views_count - a.page_views_count;
	});
	return articles.splice(0, 4);
};

const getFirstFiveArticles = (articles = []) => {
	const firstArticle = articles.splice(0, 1)[0];
	const latestFourArticles = articles.splice(0, 4);
	return { firstArticle, latestFourArticles };
};
export const load = (async () => {
	const { userArticles, userArticlesCopy, errors } = await getMyArticles();
	const { firstArticle, latestFourArticles } = getFirstFiveArticles(userArticles);
	return {
		firstPost: firstArticle,
		articles: latestFourArticles,
		trending: trendingArticles(userArticlesCopy),
		errors
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	setTheme: async ({ url, cookies }) => {
		const theme = url.searchParams.get('theme');
		const redirectTo = url.searchParams.get('redirectTo');
		if (theme) {
			await cookies.set('colortheme', theme, {
				path: '/',
				sameSite: 'lax',
				maxAge: 60 * 60 * 24 * 365,
				secure: !dev
			});
		}
		throw redirect(303, redirectTo ?? '/');
	}
};
