// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// GitHub Pages: production `base` must match the repo name in the URL.
const site = 'https://emiliosaidm.github.io';
const pagesBase = '/pagina-personal';

/** In `astro dev`, use `/` so the site opens at http://localhost:4321/ without a subpath. */
const cli = process.argv[2];
const base = cli === 'dev' ? '/' : pagesBase;

// https://astro.build/config
export default defineConfig({
	site,
	base,
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [react()],
});
