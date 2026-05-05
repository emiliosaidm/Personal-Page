import Image from 'next/image';
import { IdCard } from 'lucide-react';
import { flightLog, type FlightLogMark } from '@/lib/content';
import { publicAsset } from '@/lib/public-url';

function ExperienceMark({ mark }: { mark: FlightLogMark }) {
	if (mark.kind === 'icon') {
		return (
			<div
				className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--instrument)]/35 bg-[var(--elevated)] text-[var(--instrument)] shadow-sm sm:h-16 sm:w-16"
				title="Licencia de piloto privado"
			>
				<IdCard className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.5} aria-hidden />
				<span className="sr-only">Icono de licencia / identificación</span>
			</div>
		);
	}
	const frame =
		mark.frame === 'light'
			? 'rounded-2xl border border-black/10 bg-white p-2 shadow-sm'
			: 'rounded-2xl border border-white/10 bg-neutral-950 p-2 shadow-sm dark:bg-neutral-950';
	return (
		<div
			className={`flex h-14 w-14 shrink-0 items-center justify-center sm:h-16 sm:w-16 ${frame}`}
		>
			<Image
				src={publicAsset(mark.src)}
				alt={mark.alt}
				width={72}
				height={72}
				className="max-h-9 w-auto max-w-[4.75rem] object-contain sm:max-h-10"
			/>
		</div>
	);
}

export function SectionExperience() {
	return (
		<section
			id="experience"
			className="scroll-mt-20 border-b border-[var(--line)] px-4 py-24 md:px-6 md:py-32"
		>
			<div className="mx-auto max-w-6xl">
				<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--cockpit)]">
					Bitácora
				</p>
				<h2 className="font-display mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
					Legs, sin discurso de pitch.
				</h2>
				<p className="mt-6 max-w-xl text-[var(--muted)]">
					Fechas y lugares. Si quieres más entradas, se editan en{' '}
					<code className="font-mono text-sm text-[var(--ink)]">src/lib/content.ts</code>.
				</p>
				<ol className="relative mt-16 max-w-3xl space-y-12">
					{flightLog.map((leg) => (
						<li
							key={leg.id}
							className="grid grid-cols-[auto,1fr] gap-4 sm:gap-6 md:gap-8"
						>
							<div className="flex justify-end pt-1">
								<ExperienceMark mark={leg.mark} />
							</div>
							<div className="relative min-w-0 border-l border-dashed border-[var(--cockpit)]/40 pl-6 md:pl-8">
								<p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)]">
									{leg.dates}
								</p>
								<h3 className="font-display mt-2 text-2xl font-semibold text-[var(--ink)]">
									{leg.role}
								</h3>
								<p className="mt-1 font-mono text-sm text-[var(--cockpit)]">{leg.place}</p>
								<p className="mt-3 max-w-prose text-[var(--muted)]">{leg.description}</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
