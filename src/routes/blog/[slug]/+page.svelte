<script lang="ts">
	import { onMount } from 'svelte';
	import { balancer } from 'svelte-action-balancer';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	// Completely Copied and pasted from scottspence official blog GitHub
	let headingNodeList;
	let headings;
	const getHeadings = async () => {
		await headings;
	};
	onMount(() => {
		headingNodeList = document.querySelectorAll('h2');
		headings = Array.from(headingNodeList).map((h2, index) => {
			headingNodeList[index].id = h2.innerText; // it's original
			return {
				label: h2.innerText,
				href: `#${h2.innerText}`
			};
		});
		console.log(headings);
	});
	// till here
</script>

<section class="py-6 sm:py-8 lg:py-10">
	<div class="px-2 mx-auto sm:px-3 lg:px-4">
		<div class="max-w-2xl mx-auto text-center space-y-3">
			<h1
				use:balancer={{ enabled: true, ratio: 0.5 }}
				class="text-3xl font-bold text-base-content sm:text-4xl"
			>
				{data.post.title}
			</h1>
			<img
				class="object-cover w-full h-full rounded-lg"
				src={data.post.cover_image}
				alt={data.post.title}
			/>
		</div>
		{#await getHeadings()}
			Loading...
		{:then value}
			<aside class="bg-base-100 rounded-md shadow-lg w-64 table-of-contents lg:block hidden">
				<div class="">
					<h3 class="!font-extrabold !text-lg !mt-2 !mb-0" id="table-of-contents">
						Table of Contents
					</h3>
					<ul class="max-h-72 overflow-auto !mb-0">
						{#each headings as heading}
							<li class="mr-4 mb-2" key={`heading-${heading.href}`}>
								<a class="transition hover:text-accent-focus" href={heading.href}>{heading.label}</a
								>
							</li>
						{/each}
					</ul>
				</div>
			</aside>
		{/await}
		<div class="max-w-2xl mx-auto mt-7">
			<article class="prose">
				{@html data.post.body_html}
			</article>
		</div>
	</div>
</section>
