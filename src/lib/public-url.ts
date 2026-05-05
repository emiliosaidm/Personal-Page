/**
 * Rutas bajo /public con prefijo de GitHub Pages (`NEXT_PUBLIC_BASE_PATH`).
 * `next/image` a veces no antepone basePath en export estático; usar esto en `src`.
 */
export function publicAsset(path: string): string {
	const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');
	const normalized = path.startsWith('/') ? path : `/${path}`;
	if (!base) return normalized;
	return `${base}${normalized}`;
}
