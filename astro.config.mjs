// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// GitHub Pages: ajusta `base` si el repo no se llama `pagina-personal`.
// Con dominio propio en Pages, usa base: '/' y site: 'https://tudominio.com'
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
