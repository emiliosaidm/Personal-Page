'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce) return;

		const lenis = new Lenis({
			duration: 1.45,
			smoothWheel: true,
			touchMultiplier: 1.6,
		});

		let raf = 0;
		const tick = (time: number) => {
			lenis.raf(time);
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);

		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
