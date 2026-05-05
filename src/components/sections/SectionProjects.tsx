'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { projects } from '@/lib/content';

export function SectionProjects() {
	return (
		<section
			id="projects"
			className="scroll-mt-20 border-b border-[var(--line)] px-4 py-24 md:px-6 md:py-32"
		>
			<div className="mx-auto max-w-6xl">
				<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--cockpit)]">
					Trabajo
				</p>
				<h2 className="font-display mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
					Cosas que dejaron repo o URL.
				</h2>
				<div className="mt-16 grid gap-8 md:grid-cols-2">
					{projects.map((p) => (
						<motion.article
							key={p.slug}
							className="group flex flex-col overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--canvas)] dark:bg-[#0c0c0f]"
							whileHover={{ y: -4 }}
							transition={{ type: 'spring', stiffness: 260, damping: 22 }}
						>
							<div className="relative overflow-hidden">
								<motion.div
									className="origin-center"
									whileHover={{ scale: 1.04 }}
									transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
								>
									<ImagePlaceholder
										expectedPath={p.image}
										suggestion={`Tarjeta proyecto: ${p.title}`}
										aspectClass="aspect-[16/10]"
										className="rounded-none border-0"
									/>
								</motion.div>
							</div>
							<div className="flex flex-1 flex-col p-6">
								<h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
									{p.title}
								</h3>
								<p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
									{p.description}
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{p.tags.map((t) => (
										<span
											key={t}
											className="rounded-sm border border-[var(--line)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]"
										>
											{t}
										</span>
									))}
								</div>
								<div className="mt-6 flex gap-4">
									{p.href ? (
										<a
											href={p.href}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[var(--cockpit)]"
										>
											Sitio <ExternalLink className="h-3.5 w-3.5" />
										</a>
									) : null}
									{p.github ? (
										<a
											href={p.github}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)]"
										>
											Código <Github className="h-3.5 w-3.5" />
										</a>
									) : null}
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
