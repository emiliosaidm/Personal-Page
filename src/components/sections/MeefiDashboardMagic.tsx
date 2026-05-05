'use client';

import Image from 'next/image';
import { useRef } from 'react';
import type { Variants } from 'framer-motion';
import {
	motion,
	useMotionValue,
	useReducedMotion,
	useSpring,
	useTransform,
} from 'framer-motion';
import { meefiDashboardBadges } from '@/lib/content';
import { publicAsset } from '@/lib/public-url';

const DASH = publicAsset('/images/meefi/story-dashboard-showcase.png');

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

	const containerVariants: Variants = reduce
		? { hidden: {}, visible: { transition: { staggerChildren: 0 } } }
		: {
				hidden: {},
				visible: {
					transition: { staggerChildren: 0.12, delayChildren: 0.05 },
				},
			};

	const fadeUp: Variants = reduce
		? {
				hidden: { opacity: 0 },
				visible: { opacity: 1, transition: { duration: 0.2 } },
			}
		: {
				hidden: { opacity: 0, y: 24, scale: 0.92, filter: 'blur(10px)' },
				visible: {
					opacity: 1,
					y: 0,
					scale: 1,
					filter: 'blur(0px)',
					transition: { duration: 0.58, ease: [0.16, 1, 0.3, 1] },
				},
			};

	const cardEnter: Variants = reduce
		? {
				hidden: { opacity: 0 },
				visible: { opacity: 1, transition: { duration: 0.25 } },
			}
		: {
				hidden: { opacity: 0, y: 40, scale: 0.93, rotateX: 7 },
				visible: {
					opacity: 1,
					y: 0,
					scale: 1,
					rotateX: 0,
					transition: { duration: 0.88, ease: [0.14, 1, 0.32, 1] },
				},
			};

	return (
		<div className="relative mx-auto w-full max-w-5xl px-0 pb-2 pt-4 md:pt-8">
			<div
				className="pointer-events-none absolute -inset-x-12 -inset-y-16 rounded-[2.5rem] opacity-75 blur-3xl md:-inset-x-24 md:-inset-y-20"
				style={{
					background:
						'radial-gradient(ellipse 70% 55% at 50% -15%, rgba(245,158,11,0.38), transparent 52%), radial-gradient(ellipse 55% 50% at 95% 85%, rgba(30,64,175,0.42), transparent 48%), radial-gradient(ellipse 45% 45% at 5% 85%, rgba(217,119,6,0.22), transparent 45%)',
				}}
				aria-hidden
			/>
			<motion.div
				className="relative mx-auto grid w-full max-w-5xl grid-cols-1 justify-items-center gap-4 sm:grid-cols-3 sm:gap-4 md:gap-5"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-12%' }}
				variants={containerVariants}
			>
				{meefiDashboardBadges.map((b) => (
					<motion.div
						key={b.id}
						variants={fadeUp}
						className="flex w-full max-w-[11rem] flex-col items-center gap-2 rounded-2xl border border-[var(--line)] bg-[var(--canvas)]/85 px-4 py-3 text-center shadow-sm backdrop-blur-md dark:bg-[#121215]/85"
					>
						<span
							className={
								b.frame === 'light'
									? 'flex h-11 w-full max-w-[7.5rem] items-center justify-center rounded-xl border border-black/10 bg-white px-2 py-1.5'
									: 'flex h-11 w-full max-w-[7.5rem] items-center justify-center rounded-xl border border-white/10 bg-neutral-950 px-2 py-1.5'
							}
						>
							<Image
								src={publicAsset(b.logo)}
								alt={b.alt}
								width={120}
								height={40}
								className="max-h-8 w-auto max-w-full object-contain"
							/>
						</span>
						<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--cockpit)]">
							{b.label}
						</span>
						<span className="font-mono text-[10px] text-[var(--muted)]">{b.years}</span>
					</motion.div>
				))}

				<motion.div variants={cardEnter} className="relative col-span-full mt-2 w-full">
					<motion.div
						animate={
							reduce
								? undefined
								: {
										y: [0, -5, 0],
									}
						}
						transition={{
							duration: 5.2,
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
							<motion.div
								className="pointer-events-none absolute -inset-1 rounded-2xl opacity-90 md:rounded-3xl"
								animate={
									reduce
										? undefined
										: {
												opacity: [0.72, 0.95, 0.72],
											}
								}
								transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
								style={{
									background:
										'conic-gradient(from 120deg, rgba(245,158,11,0.55), rgba(30,64,175,0.5), rgba(217,119,6,0.5), rgba(245,158,11,0.55))',
									filter: 'blur(12px)',
								}}
								aria-hidden
							/>
							<div
								className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--instrument)] via-[var(--cockpit)] to-[var(--instrument)] opacity-90 transition duration-500 group-hover:opacity-100 md:-inset-[2px] md:rounded-3xl"
								aria-hidden
							/>
							<div
								className="absolute -inset-[3px] rounded-2xl opacity-50 blur-md md:rounded-3xl"
								style={{
									background:
										'linear-gradient(135deg, rgba(245,158,11,0.55), rgba(30,58,95,0.4), rgba(217,119,6,0.45))',
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
								className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#f6f7f9] shadow-[0_32px_100px_-20px_rgba(10,10,11,0.5)] dark:border-white/5 dark:bg-[#0c0c10] md:rounded-3xl"
							>
								<div
									className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
									style={{
										background:
											'linear-gradient(105deg, transparent 32%, rgba(255,255,255,0.22) 50%, transparent 68%)',
										backgroundSize: '220% 100%',
										mixBlendMode: 'overlay',
									}}
									aria-hidden
								/>
								<div className="relative aspect-[10/11] w-full sm:aspect-[16/10] md:aspect-[16/9]">
									<Image
										src={DASH}
										alt="Dashboard de Meefi: bienvenida, balance, gráfica y movimientos."
										fill
										className="object-cover object-top contrast-[1.03] saturate-[1.02]"
										sizes="(max-width: 768px) 100vw, min(1200px, 92vw)"
										priority
										quality={95}
									/>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>

				<motion.p
					variants={fadeUp}
					className="col-span-full mt-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]"
				>
					Captura en alta · app en producción
				</motion.p>
			</motion.div>
		</div>
	);
}
