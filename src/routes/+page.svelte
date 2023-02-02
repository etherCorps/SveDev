<script lang="ts">
	import type { PageServerData } from './$types';
	import { page } from '$app/stores';
	import { siteName, siteDescription } from '$lib/constants';
	export let data: PageServerData;
	const firstArticle = data.articles.firstArticle;
</script>

<svelte:head>
	<title>{siteName} | Home</title>
	<meta content={siteDescription} name="description" />
	<meta content={siteName} property="og:title" />
	<meta content="{$page.url.origin}/og" property="og:image" />
	<meta content={$page.url.origin} property="og:url" />
	<meta content={siteDescription} property="og:description" />
	<meta content={siteName} property="og:site_name" />

	<meta content="summary_large_image" name="twitter:card" />
	<meta content={siteName} name="twitter:title" />
	<meta content={siteDescription} name="twitter:description" />
	<meta content="{$page.url.origin}/og" name="twitter:image" />
</svelte:head>
{#if data.errors}
	<div class="alert shadow-lg">
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-info flex-shrink-0 w-6 h-6"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>No Content Found</span>
		</div>
	</div>
{:else}
	<section id="first-article" class="py-6 sm:py-8 lg:py-10">
		<div class="px-2 mx-auto sm:px-6 lg:px-4">
			<div
				class="relative transition-all duration-200 transform border border-gray-100 shadow overflow-hidden rounded-xl hover:shadow-lg"
			>
				<div class="absolute inset-0 hidden md:flex">
					<img
						class="object-cover w-full h-full"
						src={firstArticle.cover_image}
						alt={firstArticle.title}
					/>
				</div>
				<div class="absolute inset-0 backdrop-blur-[2px] bg-neutral-content/40" />

				<div class="relative p-4 sm:py-6 sm:px-8 sm:max-w-lg ">
					<div class="space-x-1 flex">
						<span
							class="px-2 py-2 text-xs font-bold tracking-widest uppercase rounded text-accent-content bg-accent"
							>New</span
						>
						{#each firstArticle.tag_list as tag}
							<span
								class="px-2 py-2 text-xs font-bold tracking-widest uppercase rounded text-primary-content bg-primary"
								>{tag}</span
							>
						{/each}
					</div>
					<p class="mt-12 text-2xl font-bold text-primary sm:text-3xl flex">
						<a href={firstArticle.url} target="_blank" rel="noreferrer"> {firstArticle.title}</a>
						<svg
							class="w-5 h-5 transition-all duration-200 text-primary"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<line x1="17" y1="7" x2="7" y2="17" />
							<polyline points="8 7 17 7 17 16" />
						</svg>
					</p>
					<p class="mt-4 text-sm font-medium text-primary/70">
						{new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
							new Date(firstArticle.published_at)
						)}
					</p>
					<p class="mt-4 text-base font-normal leading-7 text-primary/70">
						{firstArticle.description}
					</p>
					<div class="mt-12">
						<a
							href="/blog/{firstArticle.slug}"
							title=""
							class="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-primary-content transition-all duration-200 bg-primary border border-transparent rounded-lg hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-focus"
							role="button"
						>
							Read full article
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-6 sm:py-8 lg:py-10">
		<div class="px-2 mx-auto sm:px-3 lg:px-4">
			<div class="text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
				<h2 class="max-w-xs font-bms text-3xl font-bold text-base-content sm:text-4xl shrink-0">
					Popular
				</h2>
			</div>
			<div class="grid grid-cols-1 gap-6 px-8 mt-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4 sm:px-0">
				{#each data.trending as article}
					<div
						class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1"
					>
						<a href="/blog/{article.slug}" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
							<img
								class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-105"
								src={article.cover_image}
								alt={article.title}
							/>
						</a>
						<div class="flex-1 px-4 py-5 sm:p-6">
							<a href="/blog/{article.slug}">
								<p class="text-lg font-bold text-gray-900">{article.title}</p>
								<p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
									{article.description}
								</p>
							</a>
						</div>
						<div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
							<div class="flex items-center justify-between">
								<div class="flex items-center space-x-2">
									<p class="text-sm font-medium text-gray-900">Read</p>
									<span class="text-sm font-medium text-gray-900"> • </span>
									<p class="text-sm font-medium text-gray-900">
										{article.reading_time_minutes} min
									</p>
								</div>

								<a
									href={article.url}
									target="_blank"
									rel="noreferrer"
									title=""
									class=""
									role="button"
								>
									<img
										src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
										class="w-5 h-5"
										alt="dev.to link"
									/>
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-6 sm:py-8 lg:py-10">
		<div class="px-2 mx-auto sm:px-3 lg:px-4">
			<div class="text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
				<h2 class="max-w-xs font-bms text-3xl font-bold text-base-content sm:text-4xl shrink-0">
					Latest
				</h2>
			</div>
			<div class="grid grid-cols-1 gap-6 px-8 mt-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4 sm:px-0">
				{#each data.articles.latestFourArticles as article}
					<div
						class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1"
					>
						<a href="/blog/{article.slug}" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
							<img
								class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-105"
								src={article.cover_image}
								alt={article.title}
							/>
						</a>
						<div class="flex-1 px-4 py-5 sm:p-6">
							<a href="/blog/{article.slug}">
								<p class="text-lg font-bold text-gray-900">{article.title}</p>
								<p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
									{article.description}
								</p>
							</a>
						</div>
						<div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
							<div class="flex items-center justify-between">
								<div class="flex items-center space-x-2">
									<p class="text-sm font-medium text-gray-900">Read</p>
									<span class="text-sm font-medium text-gray-900"> • </span>
									<p class="text-sm font-medium text-gray-900">
										{article.reading_time_minutes} min
									</p>
								</div>

								<a
									href={article.url}
									target="_blank"
									rel="noreferrer"
									title=""
									class=""
									role="button"
								>
									<img
										src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
										class="w-5 h-5"
										alt="dev.to link"
									/>
								</a>
							</div>
						</div>
					</div>
				{/each}
				<a
					href="/blog"
					class="flex px-2 py-1 rounded-xl items-center space-x-1 group hover:bg-neutral hover:text-neutral-content transition duration-500 ease-in-out max-w-fit"
				>
					<span class="">See more articles</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</a>
			</div>
		</div>
	</section>

	<section class="py-6 sm:py-8 lg:py-10">
		<div class="px-2 mx-auto sm:px-3 lg:px-4">
			<div class="text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
				<h2 class="max-w-xs font-bms text-3xl font-bold text-base-content sm:text-4xl shrink-0">
					Author's Pick
				</h2>
			</div>
			<div class="grid grid-cols-1 gap-6 px-8 mt-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4 sm:px-0">
				{#each data.authorsPick as article}
					<div
						class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1"
					>
						<a href="/blog/{article.slug}" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
							<img
								class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-105"
								src={article.cover_image}
								alt={article.title}
							/>
						</a>
						<div class="flex-1 px-4 py-5 sm:p-6">
							<a href="/blog/{article.slug}">
								<p class="text-lg font-bold text-gray-900">{article.title}</p>
								<p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
									{article.description}
								</p>
							</a>
						</div>
						<div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
							<div class="flex items-center justify-between">
								<div class="flex items-center space-x-2">
									<p class="text-sm font-medium text-gray-900">Read</p>
									<span class="text-sm font-medium text-gray-900"> • </span>
									<p class="text-sm font-medium text-gray-900">
										{article.reading_time_minutes} min
									</p>
								</div>

								<a
									href={article.url}
									target="_blank"
									rel="noreferrer"
									title=""
									class=""
									role="button"
								>
									<img
										src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
										class="w-5 h-5"
										alt="dev.to link"
									/>
								</a>
							</div>
						</div>
					</div>
				{/each}
				<a
					href="/blog"
					class="flex px-2 py-1 rounded-xl items-center space-x-1 group hover:bg-neutral hover:text-neutral-content transition duration-500 ease-in-out max-w-fit"
				>
					<span class="">See more articles</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</a>
			</div>
		</div>
	</section>
{/if}
