import { flightLog } from '@/lib/content';

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
				<ol className="relative mt-16 max-w-3xl border-l border-dashed border-[var(--cockpit)]/40 pl-8 md:pl-10">
					{flightLog.map((leg) => (
						<li key={leg.id} className="relative pb-12 last:pb-0">
							<p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)]">
								{leg.dates}
							</p>
							<h3 className="font-display mt-2 text-2xl font-semibold text-[var(--ink)]">
								{leg.role}
							</h3>
							<p className="mt-1 font-mono text-sm text-[var(--cockpit)]">{leg.place}</p>
							<p className="mt-3 max-w-prose text-[var(--muted)]">{leg.description}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
