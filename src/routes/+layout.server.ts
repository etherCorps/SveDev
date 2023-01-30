import type { LayoutServerLoad } from './$types';
import { baseAPI } from '../lib/constants';
import { DEV_TO_API_KEY } from '$env/static/private';

export const load = (async ({ fetch }) => {
	const userData = await (
		await fetch(`${baseAPI}/users/me`, {
			headers: {
				accept: 'application/vnd.forem.api-v1+json',
				'Content-Type': 'application/json',
				'api-key': DEV_TO_API_KEY as string
			}
		})
	).json();
	return {
		user: userData
	};
}) satisfies LayoutServerLoad;
