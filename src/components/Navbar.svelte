<script>
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import { siteName } from '$lib/constants';
	export let userData;
</script>

<header class="py-4 sm:py-5">
	<div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
		<nav class="flex items-center justify-between">
			<a href="/" class="flex shrink-0">
				<p class="font-bss font-bold text-xl uppercase ">
					{siteName} Blog
				</p>
			</a>
			<div class="flex space-x-2 items-center">
				{#if userData.github_username}
					<a target="_blank" rel="noreferrer" href="http://github.com/{userData.github_username}">
						<svg viewBox="0 0 24 24" width="24px" height="24px"
							><path
								fill="currentColor"
								d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
							/></svg
						>
					</a>
				{/if}
				{#if userData.twitter_username}
					<a
						target="_blank"
						referrerpolicy="no-referrer"
						href="http://twitter.com/{userData.twitter_username}"
					>
						<svg viewBox="0 0 24 24" width="24px" height="24px"
							><path
								fill="currentColor"
								d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
							/></svg
						>
					</a>
				{/if}
				<ThemeSwitcher />
			</div>
		</nav>
	</div>
</header>
