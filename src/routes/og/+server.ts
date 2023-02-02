import { ImageResponse } from '@ethercorps/sveltekit-og';
import type { RequestHandler } from '@sveltejs/kit';
import { siteName } from '$lib/constants';
import { siteDescription } from '../../lib/constants';

const buildTemplate = (title: string) => {
	return `
  <section tw="w-full h-full flex" style="background-image: linear-gradient(to right bottom, rgb(255, 228, 230), rgb(204, 251, 241))">
    <div tw="w-full h-full flex items-center justify-center py-10 px-16">
      <div tw="flex gap-6">
        <h1 tw="text-[80px]">
          ${title}
        </h1>
      </div>
    </div>
    </section>
  `;
};

const fontFile = await fetch(
	'https://raw.githubusercontent.com/etherCorps/SveDev/6ded9a0188b4debec845b738284c8a0156aca72d/static/fonts/Basteleur-Moonlight.woff'
);
const fontData = await fontFile.arrayBuffer();

export const GET: RequestHandler = async ({ url, params, route }) => {
	let title = siteName;
	const hasTitle = url.searchParams.has('title');

	if (hasTitle) {
		title = url.searchParams.get('title')?.slice(0, 100) as string;
	}

	const htmlTemplate = buildTemplate(title);

	return await ImageResponse(htmlTemplate, {
		height: 630,
		width: 1200,
		fonts: [
			{
				name: 'DM Serif Display',
				data: fontData,
				weight: 400
			}
		],
		headers: {
			'Cache-Control': `public max-age=0, s-maxage=${60 * 60 * 24 * 365}`
		}
	});
};
