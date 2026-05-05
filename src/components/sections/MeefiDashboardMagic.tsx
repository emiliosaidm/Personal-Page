'use client';

import Image from 'next/image';
import { useRef } from 'react';
import {
	motion,
	useMotionValue,
	useReducedMotion,
	useSpring,
	useTransform,
} from 'framer-motion';
import { publicAsset } from '@/lib/public-url';

const DASH = publicAsset('/images/meefi/story-dashboard-magic.png');

export function MeefiDashboardMagic() {
	const wrap = useRef<HTMLDivElement>(null);
	const reduce = useReducedMotion();

	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const sMx = useSpring(mx, { stiffness: 220, damping: 24, mass: 0.4 });
	const sMy = useSpring(my, { stiffness: 220, damping: 24, mass: 0.4 });
	const rotateX = useTransform(sMy, [-0.5, 0.5], [5, -5]);
	const rotateY = useTransform(sMx, [-0.5, 0.5], [-7, 7]);

	function onMove(e: React.MouseEvent<HTMLDivElement>) {
		if (!wrap.current || reduce) return;
		const r = wrap.current.getBoundingClientRect();
		mx.set((e.clientX - r.left) / r.width - 0.5);
		my.set((e.clientY - r.top) / r.height - 0.5);
	}

	function onLeave() {
		mx.set(0);
		my.set(0);
	}

	return (
		<div className="relative mx-auto w-full max-w-5xl px-0 pb-2 pt-4 md:pt-8">
			<div
				className="pointer-events-none absolute -inset-x-12 -inset-y-16 rounded-[2.5rem] opacity-70 blur-3xl md:-inset-x-24 md:-inset-y-20"
				style={{
					background:
						'radial-gradient(ellipse 65% 50% at 50% -10%, rgba(245,158,11,0.35), transparent 55%), radial-gradient(ellipse 50% 45% at 90% 90%, rgba(61,90,128,0.45), transparent 50%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(217,119,6,0.2), transparent 45%)',
				}}
				aria-hidden
			/>
			<motion.div
				initial={reduce ? false : { opacity: 0, y: 36, scale: 0.94 }}
				whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
				viewport={{ once: true, margin: '-80px' }}
				transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
				className="relative"
			>
				<motion.div
					animate={
						reduce
							? undefined
							: {
									y: [0, -6, 0],
								}
					}
					transition={{
						duration: 5.5,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					className="relative"
				>
					<div
						ref={wrap}
						onMouseMove={onMove}
						onMouseLeave={onLeave}
						className="group relative [perspective:1200px]"
					>
						<div
							className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--instrument)] via-[var(--cockpit)] to-[var(--instrument)] opacity-90 transition duration-500 group-hover:opacity-100 md:-inset-[2px] md:rounded-3xl"
							aria-hidden
						/>
						<div
							className="absolute -inset-[3px] rounded-2xl opacity-60 blur-md md:rounded-3xl"
							style={{
								background:
									'linear-gradient(135deg, rgba(245,158,11,0.5), rgba(30,58,95,0.35), rgba(217,119,6,0.4))',
							}}
							aria-hidden
						/>
						<motion.div
							style={
								reduce
									? undefined
									: {
											rotateX,
											rotateY,
											transformStyle: 'preserve-3d',
										}
							}
							className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#f4f5f7] shadow-[0_28px_90px_-18px_rgba(10,10,11,0.45)] dark:border-white/5 dark:bg-[#0e0e12] md:rounded-3xl"
						>
							<div
								className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
								style={{
									background:
										'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.2) 50%, transparent 65%)',
									backgroundSize: '220% 100%',
									mixBlendMode: 'overlay',
								}}
								aria-hidden
							/>
							<div className="relative aspect-[10/11] w-full sm:aspect-[16/10] md:aspect-[16/9]">
								<Image
									src={DASH}
									alt="Dashboard de Meefi: inicio con balance, gráfica y movimientos."
									fill
									className="object-cover object-top"
									sizes="(max-width: 768px) 100vw, min(1100px, 90vw)"
									priority
								/>
							</div>
						</motion.div>
					</div>
				</motion.div>
				<p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
					Captura real · app en producción
				</p>
			</motion.div>
		</div>
	);
}
