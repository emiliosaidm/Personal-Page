'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { WordRevealWords } from '@/components/ui/WordReveal';
import { site } from '@/lib/content';

export function SectionHero() {
	return (
		<section
			id="hero"
			className="relative min-h-[100dvh] scroll-mt-20 border-b border-[var(--line)] px-4 pb-24 pt-28 md:px-6 md:pb-32 md:pt-32"
		>
			<div className="pointer-events-none absolute inset-0 grid-technical" aria-hidden />
			<div className="relative mx-auto max-w-6xl">
				<div className="max-w-2xl">
					<p className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--cockpit)] dark:text-[var(--cockpit)]">
						{site.location} {site.countryFlag} · {site.age} años
					</p>
					<h1 className="font-display mt-6 text-[clamp(2.75rem,9vw,4.75rem)] font-semibold leading-[0.95] tracking-tight text-[var(--ink)]">
						<WordRevealWords text={site.name} />
					</h1>
					<p className="font-display mt-6 text-xl font-medium text-[var(--cockpit)] md:text-2xl">
						{site.tagline}
					</p>
					<p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
						{site.heroBeforeMeefi}
						<a
							href={site.meefiUrl}
							className="font-medium text-[var(--instrument)] underline decoration-[var(--instrument)]/40 underline-offset-4"
						>
							Meefi
						</a>
						{site.heroAfterMeefi}
					</p>
					<motion.div
						className="mt-10 flex flex-wrap gap-3"
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.5 }}
					>
						<a
							href="#contact"
							className="rounded-full bg-[var(--cockpit)] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--canvas)] transition hover:opacity-90"
						>
							Escríbeme
						</a>
						<a
							href={site.meefiUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-full border border-[var(--line)] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--ink)] transition hover:border-[var(--cockpit)]"
						>
							meefi.io
						</a>
					</motion.div>
				</div>
			</div>
			<a
				href="#about"
				className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]"
				aria-label="Ir a sobre mí"
			>
				Abajo
				<motion.span
					animate={{ y: [0, 6, 0] }}
					transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
				>
					<ChevronDown className="h-5 w-5" />
				</motion.span>
			</a>
		</section>
	);
}
