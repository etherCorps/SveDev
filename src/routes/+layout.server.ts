import type { LayoutServerLoad } from './$types';
import { getMyDevToDetails } from '../lib/devtoApi';

export const load = (async ({ cookies }) => {
	return {
		user: getMyDevToDetails()
	};
}) satisfies LayoutServerLoad;
