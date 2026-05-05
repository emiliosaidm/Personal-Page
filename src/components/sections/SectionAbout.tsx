import Image from 'next/image';
import { site } from '@/lib/content';
import { publicAsset } from '@/lib/public-url';

const ABOUT_PILOT = publicAsset('/images/about-pilot.png');

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
					Un poco de historia y de lo que ocupa mi día.
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
							Hoy el día se reparte entre clases en el ITAM y{' '}
							<a
								href={site.meefiUrl}
								className="font-medium text-[var(--instrument)] underline decoration-[var(--instrument)]/40 underline-offset-4"
							>
								Meefi
							</a>{' '}
							(la startup de finanzas operativas para pymes que armamos Alan, Gerardo y yo): parches,
							decisiones técnicas y lo que toque en producto. Cuando afloja, natación o bajarle un
							poco a la lista de pendientes sin obsesionarme con cerrarla del todo.
						</p>
						<p>
							Aparte me gusta enredarme en problemas de matemáticas, leer y salir con mi novia.
						</p>
					</div>
					<div className="mx-auto w-full max-w-md translate-y-0 sm:translate-y-8 lg:mx-0 lg:max-w-none lg:translate-y-12">
						<figure className="relative overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--elevated)]">
							<div className="relative aspect-[4/5] w-full sm:aspect-square">
								<Image
									src={ABOUT_PILOT}
									alt="Emilio frente a un avión de entrenamiento en la pista, con licencia en la mano y pulgar arriba."
									fill
									className="object-cover object-[50%_35%]"
									sizes="(max-width: 1024px) 90vw, 36vw"
								/>
							</div>
						</figure>
					</div>
				</div>
				<p className="mt-14 font-mono text-xs text-[var(--muted)]">
					<span aria-hidden>📍</span> {site.location} · piloto privado · Meefi
				</p>
			</div>
		</section>
	);
}
