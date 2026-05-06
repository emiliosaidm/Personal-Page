import type { NextConfig } from 'next';

/** Base del sitio en GitHub Pages (nombre del repo). Vacío en local. */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') ?? '';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: 'export',
	// GitHub Pages (subruta /Repo): basePath y assetPrefix alineados evitan
	// solicitudes a /_next/... en la raíz del dominio (CSS/JS 404 → “sin estilos”).
	...(basePath ? { basePath, assetPrefix: basePath } : {}),
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
