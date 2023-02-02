<script>
	import { siteName, siteDescription } from '$lib/constants';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { insertArticles, searchArticles, createArticleDB } from '$lib/search';
	export let data;
	let searchField = '';
	onMount(async () => {
		await createArticleDB();
		await insertArticles(data.posts);
	});
	let postData = [...data.posts];
	$: if (searchField.length === 0) {
		postData = [...data.posts];
	}
</script>

<svelte:head>
	<title>{siteName} | Blog</title>
	<meta content={siteDescription} name="description" />
	<meta content={siteName} property="og:title" />
	<meta content="{$page.url.origin}/og.png" property="og:image" />
	<meta content={$page.url.origin} property="og:url" />
	<meta content={siteDescription} property="og:description" />
	<meta content={siteName} property="og:site_name" />

	<meta content="summary_large_image" name="twitter:card" />
	<meta content={siteName} name="twitter:title" />
	<meta content={siteDescription} name="twitter:description" />
	<meta content="{$page.url.origin}/og.png" name="twitter:image" />
</svelte:head>
<div class="relative px-4 sm:px-8 lg:px-12 mt-6">
	<div class="mx-auto max-w-2xl lg:max-w-5xl">
		<header class="max-w-2xl">
			<h1 class="text-4xl font-bms font-bold tracking-tight text-primary sm:text-5xl">
				Crafting digital experiences, <br sm:hidden /> one line of code at a time.
			</h1>
			<p class="mt-6 text-base text-base-content">
				From Novice to Pro: A Collection of Reflections on Programming, Development, and the Journey
				of Learning
			</p>
		</header>
		<div class="mt-7 ">
			<input
				type="text"
				bind:value={searchField}
				placeholder="Search articles"
				class="input input-bordered w-full input-md"
				on:input={async () => {
					if (searchField.length > 0) {
						const hits = await searchArticles(searchField);
						const searchedData = [];
						await hits.forEach((hit) => {
							searchedData.push(hit.document);
						});
						postData = searchedData;
					}
				}}
			/>
		</div>
		{#if searchField.length > 0 && postData.length < 1}
			<div class="alert shadow-lg mt-5">
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
			<div class="mt-16 sm:mt-20">
				<div class="md:border-l md:border-base-content md:pl-6">
					<div class="flex max-w-3xl flex-col space-y-16">
						{#each postData as post}
							<article class="md:grid md:grid-cols-4 md:items-baseline">
								<div class="md:col-span-3 group relative flex flex-col items-start">
									<h2 class="text-base font-semibold tracking-tight text-base-content">
										<div
											class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-primary sm:-inset-x-6 sm:rounded-2xl"
										/>
										<a href="/blog/{post.slug}"
											><span
												class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"
											/><span class="relative z-10 group-hover:text-primary-content"
												>{post.title}</span
											></a
										>
									</h2>
									<time
										class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
										><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"
											><span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" /></span
										>{new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
											new Date(post.published_timestamp)
										)}</time
									>
									<p class="relative z-10 mt-2 text-sm group-hover:text-primary-content/70">
										{post.description}
									</p>
									<div
										aria-hidden="true"
										class="relative z-10 mt-4 flex items-center text-sm font-medium text-primary group-hover:text-primary-content"
									>
										Read article<svg
											viewBox="0 0 16 16"
											fill="none"
											aria-hidden="true"
											class="ml-1 h-4 w-4 stroke-current"
											><path
												d="M6.75 5.75 9.25 8l-2.5 2.25"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/></svg
										>
									</div>
								</div>
								<time
									class="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm border-base-content"
									>{new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
										new Date(post.published_timestamp)
									)}</time
								>
							</article>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
