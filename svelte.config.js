import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { defineMDSveXConfig, mdsvex } from 'mdsvex';

const mdsvexConfig = defineMDSveXConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter(),
		alias: {
			'src/*': 'src/*',
			'components/*': 'src/components/*'
		}
	}
};

export default config;
