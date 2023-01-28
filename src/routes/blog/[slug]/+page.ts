import type { PageLoad } from './$types';
import {articleAPI, DevToUsername} from '$lib/constants';

export const load = (async ({ fetch, params }) => {
    const currentArticle = await (
        await fetch(`${articleAPI}/${DevToUsername}/${params.slug}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    ).json();
    return {
        post: currentArticle,
    };
}) satisfies PageLoad;
