import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { dev } from '$app/environment';
import { DEV_TO_API_KEY } from '$env/static/private';
import { articleAPI } from '$lib/constants';

export const load = (async ({ fetch }) => {
	const response = await fetch(`${articleAPI}/me/published`, {
		headers: {
			'api-key': DEV_TO_API_KEY as string,
			accept: 'application/vnd.forem.api-v1+json',
			'Content-Type': 'application/json'
		}
	});
	let userArticles = [];
	let firstPost = [];
	let articles = [];
	let trending = [];
	if (response.ok) {
		userArticles = await response.json();
		const userArticlesCopy = [...userArticles];
		userArticlesCopy.sort((a, b) => {
			return b.page_views_count - a.page_views_count;
		});
		trending = userArticlesCopy.splice(0, 4);
		firstPost = userArticles.splice(0, 1)[0];
		articles = userArticles.splice(0, 4);
	}
	return {
		firstPost,
		articles,
		trending,
		errors: !response.ok
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
