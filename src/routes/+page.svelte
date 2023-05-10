<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="bg-gray-100">
	<div
		class="container mx-auto pt-16 sm:pb-16 px-4 flex flex-col items-center shadow-lg min-h-screen bg-white"
	>
		<section
			class="text-4xl sm:text-5xl font-bold text-center mb-16 flex flex-col items-center gap-8 min-h-screen sm:min-h-fit"
		>
			<h2>Hi, I'm</h2>

			<div class="w-64 p-8 rounded-full shadow-lg bg-green-100">
				<img src="/avatar.png" alt={data.name} />
			</div>

			<h1>{data.name}</h1>
		</section>

		<div class="flex flex-col items-center min-h-screen pt-16 sm:min-h-fit sm:pt-0">
			<section class="text-center text-lg sm:text-xl mb-8">
				<p class="mb-4">
					{data.introduction}
				</p>

				<h4>
					My current employer: <a class="text-blue-800" href={data.employer_website}
						>{data.employer_name}</a
					>
				</h4>
			</section>

			<section>
				<h3 class="text-xl sm:text-2xl mb-4">Find me around the web</h3>

				<ul class="text-center">
					{#each data.links as link}
						<li>
							<a rel="me noopener noreferrer" target="_blank" href={link.url} class="text-blue-800"
								>{link.name}</a
							>
						</li>
					{/each}
				</ul>
			</section>
		</div>
	</div>
</div>
