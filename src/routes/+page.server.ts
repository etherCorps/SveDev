import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { dev } from '$app/environment';
import { getMyArticles } from '$lib/devtoApi';

const randomEditorsChoice = async (articleList: any) => {
	articleList = [...articleList];
	for (let i = articleList.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[articleList[i], articleList[j]] = [articleList[j], articleList[i]];
	}
	return articleList.splice(0, 4);
};

const trendingArticles = async (articles: any) => {
	articles = [...articles];
	articles.sort((a: any, b: any) => {
		return b.page_views_count - a.page_views_count;
	});
	return articles.splice(0, 4);
};

const getFirstFiveArticles = (articles = []) => {
	articles = [...articles];
	const firstArticle = articles.splice(0, 1)[0];
	const latestFourArticles = articles.splice(0, 4);
	return { firstArticle, latestFourArticles };
};
export const load = (async ({ setHeaders }) => {
	const { userArticles, errors } = await getMyArticles();
	// setHeaders({
	// 	'Cache-Control': `public max-age=0, s-maxage=${60 * 60}`
	// });
	return {
		articles: getFirstFiveArticles(userArticles),
		trending: trendingArticles(userArticles),
		authorsPick: randomEditorsChoice(userArticles),
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
