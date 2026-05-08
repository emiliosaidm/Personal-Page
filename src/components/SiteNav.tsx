'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const links = [
	{ id: 'hero', label: 'Inicio' },
	{ id: 'about', label: 'Sobre' },
	{ id: 'meefi', label: 'Meefi' },
	{ id: 'experience', label: 'Bitácora' },
	{ id: 'skills', label: 'Herramientas' },
	{ id: 'reading', label: 'Leyendo' },
	{ id: 'contact', label: 'Contacto' },
] as const;

export function SiteNav() {
	const { setTheme, resolvedTheme } = useTheme();
	const [active, setActive] = useState('hero');
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		const els = links
			.map((l) => document.getElementById(l.id))
			.filter(Boolean) as HTMLElement[];
		const obs = new IntersectionObserver(
			(entries) => {
				const hit = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (hit?.target.id) setActive(hit.target.id);
			},
			{ rootMargin: '-40% 0px -45% 0px', threshold: [0.1, 0.25, 0.45] },
		);
		els.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);

	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--canvas)]/90 backdrop-blur-md">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
				<button
					type="button"
					onClick={() => scrollTo('hero')}
					className="font-display text-sm font-semibold tracking-tight text-[var(--ink)] md:text-base"
				>
					ESM
				</button>
				<nav
					className="scrollbar-none flex max-w-[min(72vw,520px)] gap-1 overflow-x-auto md:max-w-none md:flex-wrap md:justify-center"
					aria-label="Sections"
				>
					{links.map(({ id, label }) => (
						<button
							key={id}
							type="button"
							onClick={() => scrollTo(id)}
							className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider transition md:px-3 md:text-[11px] ${
								active === id
									? 'bg-[var(--cockpit)] text-[var(--canvas)]'
									: 'text-[var(--muted)] hover:text-[var(--ink)]'
							}`}
						>
							{label}
						</button>
					))}
				</nav>
				<button
					type="button"
					className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)]"
					onClick={() =>
						setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
					}
					aria-label="Toggle color theme"
				>
					{mounted ? (
						resolvedTheme === 'dark' ? (
							<Sun className="h-4 w-4" />
						) : (
							<Moon className="h-4 w-4" />
						)
					) : (
						<Sun className="h-4 w-4 opacity-40" />
					)}
				</button>
			</div>
		</header>
	);
}
