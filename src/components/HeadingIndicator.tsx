'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Ownable aviation gimmick: artificial horizon / attitude reference.
 * Subtle roll tied to scroll (instrument scan) — not decoration-only.
 */
export function HeadingIndicator() {
	const reduce = useReducedMotion();
	const [roll, setRoll] = useState(0);

	useEffect(() => {
		if (reduce) return;
		const onScroll = () => {
			const y = window.scrollY;
			const max = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
			const t = y / max;
			setRoll(Math.sin(t * Math.PI * 2) * 6);
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [reduce]);

	const transform = reduce ? 0 : roll;

	return (
		<div
			className="pointer-events-none fixed bottom-6 right-4 z-40 hidden md:block lg:right-8"
			aria-hidden
		>
			<div className="relative h-24 w-24 rounded-full border border-[var(--line)] bg-[var(--elevated)] shadow-[0_0_0_1px_rgba(0,0,0,0.04)] dark:bg-[#111] dark:shadow-none">
				{/* Sky / ground split */}
				<div
					className="absolute inset-[3px] overflow-hidden rounded-full"
					style={{ transform: `rotate(${transform}deg)` }}
				>
					<div className="absolute inset-x-0 top-0 h-1/2 bg-[var(--cockpit)]/35" />
					<div className="absolute inset-x-0 bottom-0 h-1/2 bg-[var(--instrument)]/25" />
					{/* Horizon line */}
					<div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-[var(--ink)]/80 dark:bg-[var(--ink)]" />
					{/* Aircraft reference */}
					<div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 border-x-[14px] border-b-[10px] border-x-transparent border-b-[var(--instrument)]" />
				</div>
				<p className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--muted)]">
					Horizonte
				</p>
			</div>
		</div>
	);
}
