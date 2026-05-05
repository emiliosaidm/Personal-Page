import { ArrowUpRight } from 'lucide-react';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { site } from '@/lib/content';

const badges = [
	'Cofundador y CTO',
	'Desde agosto 2023',
	'CDMX',
	'Alan Said Maccise · Jesús Reyna Núñez · yo',
] as const;

export function SectionMeefi() {
	return (
		<section
			id="meefi"
			className="scroll-mt-20 border-b border-[var(--line)] bg-[var(--elevated)] px-4 py-24 dark:bg-[#0d0d10] md:px-6 md:py-32"
		>
			<div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
				<div>
					<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--cockpit)]">
						Ahora
					</p>
					<h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
						Meefi: la parte aburrida de la tesorería, en orden.
					</h2>
					<p className="mt-8 text-lg leading-relaxed text-[var(--muted)]">
						Es para pymes en México que hoy viven en Excel, WhatsApp y el banco al mismo tiempo.
						Armamos cuentas empresariales, pagos masivos, nómina, cobranza y facturación, y donde
						tiene sentido metemos WhatsApp con un bot de GPT para que contabilidad no tenga que
						estar copiando y pegando todo el día.
					</p>
					<ul className="mt-10 flex flex-wrap gap-2">
						{badges.map((b) => (
							<li
								key={b}
								className="rounded border border-[var(--line)] bg-[var(--canvas)] px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--ink)] dark:bg-[#151518]"
							>
								{b}
							</li>
						))}
					</ul>
					{/* PENDIENTE: Emilio confirma año o mes del batch / anuncio si quieres mostrarlo */}
					<p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
						Platanus Ventures · pre-seed USD $100k
					</p>
					<a
						href={site.meefiUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="group mt-8 inline-flex items-center gap-2 border-b-2 border-[var(--instrument)] pb-1 font-mono text-sm font-semibold uppercase tracking-widest text-[var(--ink)] transition hover:gap-3"
					>
						meefi.io
						<ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</a>
				</div>
				<div>
					{/* TODO: reemplazar con /public/images/meefi.jpg */}
					<ImagePlaceholder
						expectedPath="/images/meefi.jpg"
						suggestion="Product UI, dashboard, o mock de app móvil Meefi."
						aspectClass="aspect-[4/3]"
					/>
				</div>
			</div>
		</section>
	);
}
