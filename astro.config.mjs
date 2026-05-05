// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// GitHub Pages: `base` must match your repository name.
// English slug (rename repo to `personal-site` or change both to match).
const site = 'https://emiliosaidm.github.io';
const base = '/personal-site';

// https://astro.build/config
export default defineConfig({
	site,
	base,
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [react()],
});
