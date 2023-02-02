import { create, search } from '@lyrasearch/lyra';
import { insertBatch } from '@lyrasearch/lyra';

let articleDB: any;

export const createArticleDB = async () => {
	articleDB = await create({
		schema: {
			title: 'string',
			body_markdown: 'string'
		}
	});
};

const insertConfig = {
	id: (doc: any) => {
		return doc.slug;
	}
};

export const insertArticles = async (articles: any) => {
	await insertBatch(articleDB, articles, insertConfig);
};

export const searchArticles = async (searchItem: string) => {
	const searchResult = await search(articleDB, {
		term: searchItem,
		properties: ['title', 'body_markdown']
	});
	return searchResult.hits;
};
