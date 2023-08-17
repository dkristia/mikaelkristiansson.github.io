import AboutMe from '../sections/about.md';
import Experience from '../sections/experience.svelte';
import Projects from '../sections/projects.svelte';

export const sections = [
	{ id: 'about', title: 'About Me', component: AboutMe },
	{ id: 'experience', title: 'Experience', component: Experience },
	{ id: 'projects', title: 'Projects', component: Projects },
];
