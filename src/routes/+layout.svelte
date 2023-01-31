<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import type { LayoutServerData } from './$types';
	import Newsletter from '../components/Newsletter.svelte';
	import Footer from '../components/Footer.svelte';
	export let data: LayoutServerData;
</script>

<div class="bg-base-100 min-h-screen">
	<div class="max-w-7xl mx-auto">
		<Navbar userData={data?.user} />
		<slot />
		<Newsletter />
		<Footer />
	</div>
</div>
