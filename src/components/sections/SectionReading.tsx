import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { books } from '@/lib/content';

export function SectionReading() {
	return (
		<section
			id="reading"
			className="scroll-mt-20 border-b border-[var(--line)] px-4 py-24 md:px-6 md:py-32"
		>
			<div className="mx-auto max-w-6xl">
				<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--cockpit)]">
					Leyendo
				</p>
				<h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
					Lo que está en la mesa.
				</h2>
				<p className="mt-6 max-w-xl text-[var(--muted)]">
					Títulos y notas en <code className="font-mono text-sm text-[var(--ink)]">src/lib/content.ts</code>
					. Las notas van en una frase, estilo post-it.
				</p>
				<ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
					{books.map((b) => (
						<li key={b.cover}>
							{/* TODO: reemplazar con portada en public */}
							<ImagePlaceholder
								expectedPath={b.cover}
								suggestion={`Portada — ${b.title}`}
								aspectClass="aspect-[2/3]"
							/>
							<p className="font-display mt-3 text-sm font-semibold text-[var(--ink)]">{b.title}</p>
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
