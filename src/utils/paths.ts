function basePrefix(): string {
	const raw = import.meta.env.BASE_URL;
	return raw.replace(/\/$/, '') || '';
}

/** Absolute site path for links and assets (works whether `BASE_URL` has a trailing slash or not). */
export function withBase(path: string): string {
	const base = basePrefix();
	const normalized = path.replace(/^\//, '');
	if (!normalized) {
		return base ? `${base}/` : '/';
	}
	return base ? `${base}/${normalized}` : `/${normalized}`;
}

/** Path after `base`, e.g. `/about` or `/`. */
export function pathWithinBase(pathname: string): string {
	const base = basePrefix();
	const p = pathname.replace(/\/$/, '') || '/';
	if (!base) return p;
	if (p === base) return '/';
	if (p.startsWith(`${base}/`)) {
		const rest = p.slice(base.length);
		return rest || '/';
	}
	return p;
}
