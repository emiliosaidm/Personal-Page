// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// GitHub Pages: `base` MUST equal your GitHub repo name (the path after github.io).
// This folder is `pagina-personal` — if you rename the repo, update this string.
const site = 'https://emiliosaidm.github.io';
const base = '/pagina-personal';

// https://astro.build/config
export default defineConfig({
	site,
	base,
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [react()],
});
