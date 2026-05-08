import Image from 'next/image';
import { aboutSection, site } from '@/lib/content';
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
						<p className="text-[var(--ink)]">{aboutSection.p1}</p>
						<p>
							{aboutSection.p2BeforeLink}
							<a
								href={site.meefiUrl}
								className="font-medium text-[var(--instrument)] underline decoration-[var(--instrument)]/40 underline-offset-4"
							>
								Meefi
							</a>
							{aboutSection.p2AfterLink}
						</p>
						<p>{aboutSection.p3}</p>
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
					<span aria-hidden>📍</span> {site.location} · {site.pilotShort} · Meefi
				</p>
			</div>
		</section>
	);
}
