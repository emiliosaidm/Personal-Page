import type { NextConfig } from 'next';

/**
 * Prefijo de ruta para el export en GitHub Pages (`/Personal-Page`).
 * En `next dev` se ignora por defecto: si tu `.env` trae `NEXT_PUBLIC_BASE_PATH`,
 * la app solo existiría bajo `/Personal-Page` y en `http://localhost:3005/` se vería “rota”.
 * Para simular Pages en local: `NEXT_PUBLIC_FORCE_BASEPATH_IN_DEV=1 npm run dev`.
 */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') ?? '';
const useBaseInDev = process.env.NEXT_PUBLIC_FORCE_BASEPATH_IN_DEV === '1';
const basePath =
	rawBasePath && (process.env.NODE_ENV === 'production' || useBaseInDev)
		? rawBasePath
		: '';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// Export estático solo en `npm run build` (no en `next dev`), para evitar fallos al desarrollar.
	...(process.env.NEXT_STATIC_EXPORT === '1' ? { output: 'export' as const } : {}),
	// GitHub Pages (subruta /Repo): basePath y assetPrefix alineados evitan
	// solicitudes a /_next/... en la raíz del dominio (CSS/JS 404 → “sin estilos”).
	...(basePath ? { basePath, assetPrefix: basePath } : {}),
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
