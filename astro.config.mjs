// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// GitHub Pages: production `base` must match the repo name in the URL.
const site = 'https://emiliosaidm.github.io';
const pagesBase = '/pagina-personal';

/** Subcommand works even when Node injects flags before `astro.js` (e.g. Cursor / loaders). */
function astroCommand() {
	const known = new Set([
		'dev',
		'build',
		'preview',
		'sync',
		'check',
		'add',
		'docs',
		'preferences',
	]);
	for (let i = process.argv.length - 1; i >= 0; i--) {
		const a = process.argv[i];
		if (a.startsWith('-')) continue;
		if (known.has(a)) return a;
	}
	return null;
}

const cmd = astroCommand();
const useRootBase =
	cmd === 'dev' ||
	cmd === 'check' ||
	cmd === 'sync' ||
	cmd === 'add' ||
	cmd === 'docs' ||
	cmd === 'preferences';
const base = useRootBase ? '/' : pagesBase;

// https://astro.build/config
export default defineConfig({
	site,
	base,
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [react()],
});
