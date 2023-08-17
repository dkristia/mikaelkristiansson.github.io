<script lang="ts">
	import { sections } from '$lib/sections';
	import { onMount } from 'svelte';
	import '../app.css';
	import Footer from 'components/Footer.svelte';
	let modalOpen = false;

	const toggleModal = () => (modalOpen = modalOpen !== true);

	onMount(() => {
		if (location.hash) {
			const id = location.hash.substring(1); // location.hash without the '#'
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) {
					el.scrollIntoView();
					el.focus();
				}
			}, 0);
		}
	});
</script>

<div class="h-full overflow-hidden">
	<main class="w-full h-full flex flex-col overflow-hidden">
		<nav
			class="fixed top-0 z-30 backdrop-blur-sm transition-all shadow-sm bg-surface-900/10 text-gray-200 px-2 sm:px-4 py-2.5 w-full"
		>
			<div class="mx-auto flex flex-wrap justify-between items-center container">
				<a href="/" class="flex items-center">
					<span class="self-center whitespace-nowrap text-xl font-semibold text-white">MK</span></a
				>
				<button
					type="button"
					class="focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 text-gray-400 hover:text-white hover:bg-gray-600 ml-3 md:hidden"
					aria-label="Open main menu"
					on:click={toggleModal}
					><span class="sr-only">Open main menu</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						class="h-6 w-6 shrink-0"
						aria-label="bars 3"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						><path
							d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg></button
				>
				<div class="w-full md:block md:w-auto" hidden={!modalOpen}>
					<ul
						class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
					>
						{#each sections as section}
							<li>
								<a
									href={`/#${section.id}`}
									on:click={toggleModal}
									class="block py-2 pr-4 pl-3 md:p-0 text-slate-300 hover:text-aquamarine-300 font-thin"
									>{section.title}</a
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</nav>
		<div class="flex-auto w-full h-full flex overflow-hidden">
			<div class="flex-1 overflow-x-hidden overflow-y-auto flex flex-col">
				<div class="flex-auto">
					<slot />
				</div>
			</div>
		</div>
	</main>
	<Footer />
</div>

<style>
	nav ul li a::before {
		position: relative;
		counter-increment: anchor;
		content: '0' counter(anchor) '.';
		@apply text-aquamarine-300;
		@apply pr-1;
	}
</style>
