'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { WordRevealWords } from '@/components/ui/WordReveal';
import { site } from '@/lib/content';

const PORTADA = '/images/portada.png';

/*
 * Tagline (elige una; la activa es la más sobria):
 * 1) Declarativo corto: "Matemáticas, código, cabina."
 * 2) Descriptivo de lo que haces: "Estudio, construyo en Meefi, vuelo cuando deja el calendario."
 * 3) Más oblicuo / personal: "Me gusta entender las reglas y luego ver si las puedo respetar en la práctica."
 */
const TAGLINE = 'Matemáticas, código, cabina.';

export function SectionHero() {
	return (
		<section
			id="hero"
			className="relative min-h-[100dvh] scroll-mt-20 border-b border-[var(--line)] px-4 pb-24 pt-28 md:px-6 md:pb-32 md:pt-32"
		>
			<div className="pointer-events-none absolute inset-0 grid-technical" aria-hidden />
			<div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
				<div>
					<p className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--cockpit)] dark:text-[var(--cockpit)]">
						{site.location} {site.countryFlag} · {site.age} años
					</p>
					<h1 className="font-display mt-6 text-[clamp(2.75rem,9vw,4.75rem)] font-semibold leading-[0.95] tracking-tight text-[var(--ink)]">
						<WordRevealWords text={site.name} />
					</h1>
					<p className="font-display mt-6 text-xl font-medium text-[var(--cockpit)] md:text-2xl">
						{TAGLINE}
					</p>
					<p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
						Estudio matemáticas aplicadas en el ITAM y soy uno de los tres cofundadores de{' '}
						<a
							href={site.meefiUrl}
							className="font-medium text-[var(--instrument)] underline decoration-[var(--instrument)]/40 underline-offset-4"
						>
							Meefi
						</a>
						. Vuelo cuando el calendario deja; la maestría en AI y datos en UT Austin la llevo en
						paralelo, a veces con retraso honesto.
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
				<div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:translate-y-4">
					<figure className="relative overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--elevated)]">
						<div className="relative aspect-[3/4] w-full md:aspect-[4/5]">
							<Image
								src={PORTADA}
								alt="Emilio en el escritorio, con el monitor y código al fondo."
								fill
								className="object-cover object-[50%_22%]"
								sizes="(max-width: 1024px) 100vw, 40vw"
								priority
							/>
						</div>
					</figure>
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
