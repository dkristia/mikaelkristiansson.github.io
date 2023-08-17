<script>
	const experiences = [
		{
			title: 'Nordfin',
			description:
				'Create new design and cms for home page, redesign the customer platform and rewrite in React',
			link: 'https://nordfincapital.com',
			time: '2023'
		},
		{
			title: 'Schibsted (MittBolån, Lendo)',
			description: 'Working on a loan comparison site for private loans in React (Gatsby + NextJS)',
			link: 'https://lendo.se',
			time: '2017 - 2022'
		},
		{
			title: 'Edimia Education',
			description:
				'Creating fully digital school material for pre-school kids in JS and Angular. Project was later sold to Albert (see link).',
			link: 'https://hejalbert.se/',
			time: '2013 - 2017'
		},
		{
			title: 'Sanoma/Bonnier Utbildning',
			description:
				'Creating interactive school material for whiteboards in Flash and creating a math app in HTML for kids',
			link: 'https://www.sanomautbildning.se',
			time: '2010 - 2013'
		}
	];
</script>

<h2>Work experience</h2>

<div class="flex justify-center">
	<ol class="relative border-l border-gray-700">
		{#each experiences as experience}
			<li class="mb-10 last:mb-0 ml-6">
				<span
					class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-moon-raker-900 rounded-full ring-8 ring-surface-900"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="text-aquamarine-300 w-3 h-3"
					>
						<path
							stroke-linecap="round"
							d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
						/>
					</svg>
				</span>
				<div class="flex justify-between items-baseline gap-8">
					<h3 class="text-white mb-1 flex items-center text-lg font-medium">
						{experience.title}
					</h3>
					<a
						href={experience.link}
						target="_blank"
						rel="noreferrer"
						class="block px-4 py-1.5 text-aquamarine-300 border border-aquamarine-300 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-aquamarine-300 hover:text-surface-900 focus:text-surface-900 hover:shadow-lg focus:bg-aquamarine-300 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
						data-mdb-ripple="true">visit</a
					>
				</div>
				<time class="mb-2 block text-sm font-normal leading-none text-gray-500"
					>{experience.time}</time
				>
				<p class="mb-4 text-base font-normal text-gray-300">
					{experience.description}
				</p>
			</li>
		{/each}
	</ol>
</div>
