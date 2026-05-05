'use client';

import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { LiveCoordinates } from '@/components/LiveCoordinates';
import { site } from '@/lib/content';

export function SectionContact() {
	const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle');

	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const name = String(fd.get('name') ?? '').trim();
		const email = String(fd.get('email') ?? '').trim();
		const message = String(fd.get('message') ?? '').trim();
		const subject = encodeURIComponent(`Contacto desde el sitio — ${name}`);
		const body = encodeURIComponent(`Correo: ${email}\n\n${message}`);
		const href = `mailto:${site.email}?subject=${subject}&body=${body}`;
		if (href.length > 1800) {
			setStatus('err');
			return;
		}
		try {
			window.location.href = href;
			setStatus('ok');
		} catch {
			setStatus('err');
		}
	}

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
				<p className="mt-6 max-w-xl text-[var(--muted)]">
					Normalmente respondo en uno o dos días. Me llega mucho de Meefi, después matemáticas o
					aviación; en ese orden más o menos.
				</p>
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

				<div className="mt-16 grid gap-12 border-t border-[var(--line)] pt-16 lg:grid-cols-2 lg:items-start">
					<div>
						<h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">
							Mensaje (opcional)
						</h3>
						<p className="mt-3 text-sm text-[var(--muted)]">
							En GitHub Pages no hay servidor: al enviar se abre tu app de correo con el mensaje
							armado. Si prefieres backend más adelante,{' '}
							<a
								className="text-[var(--cockpit)] underline"
								href="https://resend.com/docs/send-with-nextjs"
								target="_blank"
								rel="noreferrer"
							>
								Resend
							</a>{' '}
							o{' '}
							<a
								className="text-[var(--cockpit)] underline"
								href="https://formspree.io/"
								target="_blank"
								rel="noreferrer"
							>
								Formspree
							</a>
							.
						</p>
						<form className="mt-8 space-y-4" onSubmit={onSubmit}>
							<label className="block">
								<span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
									Nombre
								</span>
								<input
									name="name"
									required
									className="mt-1 w-full border border-[var(--line)] bg-[var(--canvas)] px-3 py-2.5 font-sans text-sm text-[var(--ink)] outline-none transition focus:border-[var(--cockpit)] dark:bg-[#111]"
								/>
							</label>
							<label className="block">
								<span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
									Correo
								</span>
								<input
									name="email"
									type="email"
									required
									className="mt-1 w-full border border-[var(--line)] bg-[var(--canvas)] px-3 py-2.5 font-sans text-sm text-[var(--ink)] outline-none transition focus:border-[var(--cockpit)] dark:bg-[#111]"
								/>
							</label>
							<label className="block">
								<span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
									Mensaje
								</span>
								<textarea
									name="message"
									required
									rows={4}
									className="mt-1 w-full resize-y border border-[var(--line)] bg-[var(--canvas)] px-3 py-2.5 font-sans text-sm text-[var(--ink)] outline-none transition focus:border-[var(--cockpit)] dark:bg-[#111]"
								/>
							</label>
							<button
								type="submit"
								className="inline-flex items-center gap-2 rounded-full bg-[var(--instrument)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-[var(--canvas)] transition hover:brightness-110"
							>
								<Send className="h-4 w-4" />
								Abrir correo
							</button>
							{status === 'ok' ? (
								<p className="font-mono text-xs text-[var(--cockpit)]">
									Si no se abrió nada, manda directo a {site.email}.
								</p>
							) : null}
							{status === 'err' ? (
								<p className="font-mono text-xs text-red-600">
									Mensaje muy largo para mailto — acorta o escribe directo por correo.
								</p>
							) : null}
						</form>
					</div>
					<div className="flex flex-col justify-end border-t border-[var(--line)] pt-12 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
						<p className="font-display text-2xl font-semibold text-[var(--ink)]">Emilio Said Maccise</p>
						<p className="mt-2 text-sm text-[var(--muted)]">
							© {new Date().getFullYear()} — hecho a mano con Next.js.
						</p>
					</div>
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
