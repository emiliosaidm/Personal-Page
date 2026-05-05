import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { personalGallery } from '@/lib/content';

export function SectionBeyond() {
	return (
		<section
			id="beyond"
			className="scroll-mt-20 border-b border-[var(--line)] bg-[var(--elevated)] px-4 py-24 dark:bg-[#0d0d10] md:px-6 md:py-32"
		>
			<div className="mx-auto max-w-6xl">
				<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--cockpit)]">
					Fuera de la pantalla
				</p>
				<h2 className="font-display mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
					Agua, aire, papel.
				</h2>
				<p className="mt-6 max-w-xl text-[var(--muted)]">
					Volar cuando deja el calendario, leer sin prisa, nadar temprano, y seguir metiéndole a
					mates fuera de clase. Nada de lista de logros; esto es lo demás.
				</p>
				<div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{personalGallery.map((item, i) => (
						<figure
							key={item.src}
							className={`${i === 1 ? 'sm:translate-y-6' : ''} ${i === 2 ? 'sm:-translate-y-4' : ''}`}
						>
							{/* TODO: reemplazar con archivo en public — ver caption */}
							<ImagePlaceholder
								expectedPath={item.src}
								suggestion={item.caption}
								aspectClass="aspect-[4/5]"
							/>
							<figcaption className="mt-2 font-mono text-[10px] leading-snug text-[var(--muted)]">
								{item.caption}
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}
