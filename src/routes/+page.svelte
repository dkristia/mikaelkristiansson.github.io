<script lang="ts">
	import { sections } from '$lib/sections';
	import Reavealed from 'components/Reavealed.svelte';
	import Code from '../sections/code.md';
</script>

<svelte:head>
	<title>Mikael Kristiansson ♔ - Portfolio</title>
</svelte:head>

<div class="relative px-4 py-10 md:py-20">
	<div class="min-h-screen container max-w-[1200px] mx-auto mb-20 md:mb-0">
		<div class="flex justify-center flex-col md:flex-row">
			<div
				class="flex h-32 md:h-80 mt-10 md:mt-0 justify-center items-center md:items-start flex-col"
			>
				<div>
					<h1 class="text-4xl md:text-6xl text-white font-bold">Mikael Kristiansson</h1>
					<h3 class="text-xl md:text-2xl text-white/90 italic">
						$ <span class="text-aquamarine-300">Webdeveloper</span>
					</h3>
				</div>
			</div>
			<div class="flex h-32 md:h-80 w-80 justify-center items-center">
				<div class="animated" />
				<svg
					class="h-32 w-32 md:h-40 md:w-40 fill-white bounce"
					viewBox="0 0 256 256"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M241.2793,70.4541a19.8817,19.8817,0,0,0-20.88184-2.874L173.1582,88.57617,145.4834,38.76074a20,20,0,0,0-34.9668-.001L82.8418,88.57617l-47.249-21.001A20.00018,20.00018,0,0,0,8.002,90.42676l25.44434,108.333a20.06608,20.06608,0,0,0,24.86523,14.68261,261.8952,261.8952,0,0,1,139.33008-.01367A20.012,20.012,0,0,0,222.5,198.75488L247.98926,90.43652A19.88333,19.88333,0,0,0,241.2793,70.4541ZM56.81055,193.27246l-.002-.00879.00293.00977Zm143.27539-4.04a286.03693,286.03693,0,0,0-144.22071.0127L33.207,92.7793l43.23145,19.21386a19.90073,19.90073,0,0,0,25.60644-8.5625L128,56.71l25.957,46.72266a19.8994,19.8994,0,0,0,25.60547,8.56054l43.21875-19.209Zm-28.14844-34.373a11.99046,11.99046,0,0,1-13.16113,10.71386,302.37638,302.37638,0,0,0-61.55274,0,12,12,0,1,1-2.44726-23.875,326.48954,326.48954,0,0,1,66.44726,0A12.00021,12.00021,0,0,1,171.9375,154.85938Z"
					/>
				</svg>
			</div>
		</div>
		<div class="px-4 pt-20 pb-10 md:pt-20 md:pb-20 space-y-20">
			<p>
				<strong class="font-medium">Hi</strong>, my name is Mikael Kristiansson<br />
				and Im a software engineer/web-developer and has been since
				<span class="underline decoration-dotted">2010</span>. <br />
				I define myself as a frontend developer, but I do also have knowledge in backend and infra.
			</p>
		</div>
		<Code />
	</div>
	{#each sections as section}
		<section
			class="container max-w-[1200px] mx-auto px-4 pb-20 md:pb-40 space-y-20"
			id={section.id}
		>
			<Reavealed
				class="relative transition-[transform,opacity] will-change-contents"
				options={{ opacity: 0, y: 10, duration: 1000, delay: 400 }}
			>
				<svelte:component this={section.component} />
			</Reavealed>
		</section>
	{/each}
</div>

<style>
	.animated {
		@apply bg-gradient-to-r;
		@apply from-aquamarine-300;
		@apply to-pink-400;
		opacity: 0.5;
		position: absolute;
		z-index: -1;
		border-radius: 9999px;
		filter: blur(64px);
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite;
		height: 16rem;
		width: 16rem;
	}
	.bounce {
		animation: bounce 1s infinite;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(-2%);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
		50% {
			transform: translateY(0);
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
	}

	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}

	@media (min-width: 768px) {
		.animated {
			height: 20rem;
			width: 20rem;
		}
	}

	h1 {
		text-shadow: 0 2px 2px rgb(0 0 0 / 15%);
	}
</style>
