import axios from 'axios';
import { DEV_TO_API_KEY } from '$env/static/private';
import { devToUsername } from './constants';

const apiInstance = axios.create({
	baseURL: 'https://dev.to/api/',
	timeout: 2000,
	headers: {
		accept: 'application/vnd.forem.api-v1+json',
		'Content-Type': 'application/json',
		'api-key': DEV_TO_API_KEY as string
	}
});

export const getMyDevToDetails = async () => {
	const { data } = await apiInstance.get('users/me');
	return data;
};

export const getMyArticles = async () => {
	const { data, status } = await apiInstance.get('articles/me/published');
	return { userArticles: data, errors: !(status === 200) };
};

export const getArticleBySlug = async (slug: string) => {
	const { data } = await apiInstance.get(`articles/${devToUsername}/${slug}`);
	return data;
};

export const getMyAllArticles = async () => {
	const { data } = await apiInstance.get(`articles/me/published?page=1&per_page=500`);
	return data;
};
