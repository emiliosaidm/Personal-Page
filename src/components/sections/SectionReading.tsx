import Image from 'next/image';
import { books } from '@/lib/content';
import { publicAsset } from '@/lib/public-url';

export function SectionReading() {
	return (
		<section
			id="reading"
			className="scroll-mt-20 border-b border-[var(--line)] px-4 py-16 md:px-6 md:py-20"
		>
			<div className="mx-auto max-w-6xl">
				<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--cockpit)]">
					Leyendo
				</p>
				<h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
					Lo que está en la mesa.
				</h2>
				<p className="mt-3 max-w-xl text-sm text-[var(--muted)]">
					Tres títulos que sigo o releo con calma. Las notas se editan en{' '}
					<code className="font-mono text-xs text-[var(--ink)]">src/lib/content.ts</code>.
				</p>
				<ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
					{books.map((b) => (
						<li key={b.cover} className="flex min-w-0 flex-col">
							<div className="relative aspect-[2/3] overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--elevated)]">
								<Image
									src={publicAsset(b.cover)}
									alt={`Portada: ${b.title}`}
									fill
									className="object-cover"
									sizes="(max-width:640px) 100vw, 28vw"
								/>
							</div>
							<p className="font-display mt-2 text-sm font-semibold leading-snug text-[var(--ink)]">
								{b.title}
							</p>
							<p className="font-mono text-[10px] leading-snug text-[var(--muted)]">{b.subtitle}</p>
							<p className="mt-1 font-mono text-[10px] leading-relaxed text-[var(--muted)]">
								{b.note}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
