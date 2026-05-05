import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { site } from '@/lib/content';

export function SectionAbout() {
	return (
		<section
			id="about"
			className="scroll-mt-20 border-b border-[var(--line)] px-4 py-24 md:px-6 md:py-32"
		>
			<div className="mx-auto max-w-6xl">
				<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--cockpit)]">
					Sobre mí
				</p>
				<h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
					Cómo llegué, qué hago, por qué no es tan raro.
				</h2>
				<div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-6 text-lg leading-relaxed text-[var(--muted)]">
						<p className="text-[var(--ink)]">
							A los 17 saqué la licencia de piloto privado. Antes de eso, lo que más me enganchó del
							código fue Python en la prepa: quería automatizar cosas aburridas de la escuela y se
							me fue de las manos. En mate, me tardé en entender que me gustaban de verdad; en el
							ITAM empecé a ver cómo se conectan con cosas medibles.{' '}
							{/* PENDIENTE: Emilio confirma detalles (primer programa concreto, año, o avión de escuela si quieres nombrarlo). */}
						</p>
						<p>
							Hoy el día se reparte entre clases en el ITAM, parches y decisiones técnicas en Meefi
							con Alan y Jesús, y la maestría en UT Austin cuando no explota la semana. Los fines,
							si hay clima y tiempo, intento volar; si no, natación o leer un rato sin pretender
							terminar la lista de pendientes.
						</p>
						<p>
							El hilo no es místico: me late entender cómo funcionan las reglas (mate, aviación,
							una base de datos) y luego ver si las puedo aplicar sin hacerse bolas el mundo real.
							Meefi es eso en contabilidad de pyme; la cabina es eso con viento de costado.
						</p>
					</div>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
						<div className="translate-y-0 sm:translate-y-8 lg:translate-y-12">
							{/* TODO: reemplazar con /public/images/about-1.jpg */}
							<ImagePlaceholder
								expectedPath="/images/about-1.jpg"
								suggestion="Retrato tuyo — mismo tono editorial que hero."
								aspectClass="aspect-square"
							/>
						</div>
						<div className="-translate-y-0 sm:-translate-y-4 lg:translate-y-0">
							{/* TODO: reemplazar con /public/images/about-2.jpg */}
							<ImagePlaceholder
								expectedPath="/images/about-2.jpg"
								suggestion="Cabina, pista, o estudio — narrativa de movimiento."
								aspectClass="aspect-[5/6]"
							/>
						</div>
					</div>
				</div>
				<p className="mt-14 font-mono text-xs text-[var(--muted)]">
					<span aria-hidden>📍</span> {site.location} · piloto privado · Meefi · maestría UT Austin
					(en curso)
				</p>
			</div>
		</section>
	);
}
