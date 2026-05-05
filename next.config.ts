import type { NextConfig } from 'next';

/** Base del sitio en GitHub Pages (nombre del repo). Vacío en local. */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') ?? '';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: 'export',
	...(basePath ? { basePath } : {}),
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
