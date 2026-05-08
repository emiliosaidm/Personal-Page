import { Github, Linkedin, Mail } from 'lucide-react';
import { LiveCoordinates } from '@/components/LiveCoordinates';
import { contactSection, site } from '@/lib/content';

export function SectionContact() {
	return (
		<section
			id="contact"
			className="scroll-mt-20 px-4 pb-32 pt-24 md:px-6 md:pb-40 md:pt-32"
		>
			<div className="mx-auto max-w-6xl">
				<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--cockpit)]">
					Contacto
				</p>
				<h2 className="font-display mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1] tracking-tight text-[var(--ink)]">
					Escríbeme
				</h2>
				<p className="mt-6 max-w-xl text-[var(--muted)]">{contactSection.intro}</p>
				<div className="mt-10 flex flex-wrap gap-4">
					<a
						href={`mailto:${site.email}`}
						className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 font-mono text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--cockpit)]"
					>
						<Mail className="h-4 w-4" />
						{site.email}
					</a>
					<a
						href={site.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full bg-[var(--cockpit)] px-5 py-3 font-mono text-sm font-semibold text-[var(--canvas)] transition hover:opacity-90"
					>
						<Linkedin className="h-4 w-4" />
						LinkedIn
					</a>
					<a
						href={site.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 font-mono text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--cockpit)]"
					>
						<Github className="h-4 w-4" />
						GitHub
					</a>
				</div>

				<div className="mt-16 border-t border-[var(--line)] pt-12">
					<p className="font-display text-2xl font-semibold text-[var(--ink)]">Emilio Said Maccise</p>
					<p className="mt-2 text-sm text-[var(--muted)]">
						© {new Date().getFullYear()} — hecho a mano.
					</p>
				</div>
				<footer className="mt-20 flex flex-col items-center gap-2 border-t border-[var(--line)] pt-10">
					<LiveCoordinates />
					<p className="max-w-md text-center font-mono text-[9px] text-[var(--muted)]">
						CDMX en el mapa; el trabajo sigue siendo mover bits y papeles en orden.
					</p>
				</footer>
			</div>
		</section>
	);
}
