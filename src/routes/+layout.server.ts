import type { LayoutServerLoad } from './$types';
import { getMyDevToDetails } from '../lib/devtoApi';

export const load = (async () => {
	return {
		user: getMyDevToDetails()
	};
}) satisfies LayoutServerLoad;
