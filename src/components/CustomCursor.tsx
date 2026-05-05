'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

/** Subtle halo — desktop + fine pointer + motion OK only. */
export function CustomCursor() {
	const [enabled, setEnabled] = useState(false);
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const sx = useSpring(x, { stiffness: 400, damping: 32, mass: 0.35 });
	const sy = useSpring(y, { stiffness: 400, damping: 32, mass: 0.35 });

	useEffect(() => {
		const coarse = window.matchMedia('(pointer: coarse)').matches;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const narrow = window.matchMedia('(max-width: 767px)').matches;
		if (coarse || reduce || narrow) {
			setEnabled(false);
			return;
		}
		setEnabled(true);
		document.body.setAttribute('data-cursor', 'custom');
		const move = (e: MouseEvent) => {
			x.set(e.clientX);
			y.set(e.clientY);
		};
		window.addEventListener('mousemove', move);
		return () => {
			window.removeEventListener('mousemove', move);
			document.body.removeAttribute('data-cursor');
		};
	}, [x, y]);

	useEffect(() => {
		if (!enabled) return;
		const onEnter = () =>
			document.documentElement.style.setProperty('--cursor-scale', '1.4');
		const onLeave = () =>
			document.documentElement.style.setProperty('--cursor-scale', '1');
		const sel = 'a, button, [role="button"], input, textarea, select';
		const nodes = document.querySelectorAll(sel);
		nodes.forEach((n) => {
			n.addEventListener('mouseenter', onEnter);
			n.addEventListener('mouseleave', onLeave);
		});
		return () => {
			nodes.forEach((n) => {
				n.removeEventListener('mouseenter', onEnter);
				n.removeEventListener('mouseleave', onLeave);
			});
		};
	}, [enabled]);

	if (!enabled) return null;

	return (
		<motion.div
			className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
			style={{ x: sx, y: sy }}
			aria-hidden
		>
			<div
				className="-translate-x-1/2 -translate-y-1/2"
				style={{
					transform: `translate(-50%, -50%) scale(var(--cursor-scale, 1))`,
				}}
			>
				<div className="h-2 w-2 rounded-full bg-[var(--instrument)] shadow-[0_0_12px_rgba(245,158,11,0.55)]" />
				<div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--cockpit)]/50" />
			</div>
		</motion.div>
	);
}
