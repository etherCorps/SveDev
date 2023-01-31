<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
</script>

<footer class="mt-16">
	<div class="sm:px-8">
		<div class="mx-auto lg:px-4">
			<div class="border-t text-base-content pt-5 pb-8">
				<div class="relative px-2 sm:px-4 lg:px-6">
					<div class="mx-auto max-w-2xl lg:max-w-5xl">
						<div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
							<div class="flex gap-6 text-sm font-medium text-base-content">
								<a class="transition hover:text-primary" href="/">Home</a><a
									class="transition hover:text-primary"
									href="/blog">Blog</a
								>
							</div>
							<p class="text-sm text-base-content">
								© <!-- -->2023<!-- -->
								{PUBLIC_APP_NAME}. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
