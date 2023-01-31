import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	let theme: string | null = null;
	const newTheme = event.url.searchParams.get('theme');
	const cookieTheme = event.cookies.get('colortheme');
	if (newTheme) {
		theme = newTheme;
	} else if (cookieTheme) {
		theme = cookieTheme;
	}
	if (theme) {
		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('data-theme="winter"', `data-theme="${theme}"`)
		});
	}
	return resolve(event);
}) satisfies Handle;
