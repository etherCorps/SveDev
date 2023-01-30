<script>
	import { onMount } from 'svelte';
	import { balancer } from 'svelte-action-balancer';

	export let data;

	// Completely Copied and pasted from scottspence official blog GitHub
	let headingNodeList;
	let headings;
	const getHeadings = async () => {
		await headings;
	};
	onMount(() => {
		headingNodeList = document.querySelectorAll('h2');
		headings = Array.from(headingNodeList).map((h2, index) => {
			headingNodeList[index].id = `h2-${index + 1}`; // it's original
			return {
				label: h2.innerText,
				href: `#${h2.id}`
			};
		});
		console.log(headings);
	});
	// till here
</script>

<section class="py-6 sm:py-8 lg:py-10">
	<div class="px-2 mx-auto sm:px-3 lg:px-4">
		<div class="max-w-2xl mx-auto text-center space-y-3">
			<h2
				use:balancer={{ enabled: true, ratio: 0.5 }}
				class="text-3xl font-bold text-base-content sm:text-4xl"
			>
				{data.post.title}
			</h2>
			<img
				class="object-cover w-full h-full rounded-lg"
				src={data.post.cover_image}
				alt={data.post.title}
			/>
		</div>

		<div class="max-w-2xl mx-auto mt-7">
			<article class="prose">
				{@html data.post.body_html}
			</article>
		</div>
	</div>
</section>
