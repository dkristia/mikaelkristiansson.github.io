<script>
	const projects = [
		{
			title: 'GitBar',
			link: 'https://mikaelkristiansson.github.io/gitbar',
			description:
				'A native system tray app which notifies when you have a new code review and also list all your awaiting reviews.',
			tag: 'app'
		},
		{
			title: 'VSCode Theme - react theme',
			link: 'https://marketplace.visualstudio.com/items?itemName=mikaelkristiansson87.react-theme-vscode',
			description:
				'A VSCode theme which has the same color palette as <a href="https://reactjs.org/">https://reactjs.org/</a> code snipets.',
			tag: 'theme'
		}
	];
</script>

<h2>Projects</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
	{#each projects as project}
		<article class="bg-moon-raker-900/80 border border-moon-raker-600/80 rounded-md shadow-sm p-4">
			<h3 class="mb-2 text-2xl font-medium text-gray-100">
				{project.title}
			</h3>
			<p class="mb-3 font-thin text-gray-300">
				{@html project.description}
			</p>
			<div class="flex justify-between items-baseline">
				<span
					class="bg-moon-raker-700 text-moon-raker-100 text-sm font-normal mr-2 px-2.5 py-0.5 rounded"
					>{project.tag}</span
				>
				<a
					href={project.link}
					target="_blank"
					rel="noreferrer"
					class="block px-4 py-1.5 text-aquamarine-300 border border-aquamarine-300 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-aquamarine-300 hover:text-surface-900 focus:text-surface-900 hover:shadow-lg focus:bg-aquamarine-300 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
					data-mdb-ripple="true">check it out!</a
				>
			</div>
		</article>
	{/each}
</div>
