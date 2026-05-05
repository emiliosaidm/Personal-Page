'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { site } from '@/lib/content';

/** CDMX — guiño de navegación; animación solo al hover (sin pulso permanente). */
export function LiveCoordinates() {
	const reduce = useReducedMotion();
	const inner = (
		<>
			<span className="text-[var(--cockpit)]">NAV</span>{' '}
			{site.coordinates.lat} · {site.coordinates.lng}
		</>
	);
	if (reduce) {
		return (
			<p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--muted)]">{inner}</p>
		);
	}
	return (
		<motion.p
			className="cursor-default font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--muted)]"
			initial={false}
			whileHover={{ opacity: 1 }}
			transition={{ duration: 0.2 }}
			style={{ opacity: 0.7 }}
		>
			{inner}
		</motion.p>
	);
}
