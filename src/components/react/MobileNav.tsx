import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Link = { href: string; label: string; path: string };

function isRouteActive(within: string, routePath: string) {
	const w = within.replace(/\/$/, '') || '/';
	const p = routePath.replace(/\/$/, '') || '/';
	if (p === '/') return w === '/' || w === '';
	return w === p || w.startsWith(`${p}/`);
}

type Props = {
	links: Link[];
	within: string;
};

export default function MobileNav({ links, within }: Props) {
	const [open, setOpen] = useState(false);

	return (
		<div className="md:hidden">
			<button
				type="button"
				className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white"
				aria-expanded={open}
				aria-label={open ? 'Close menu' : 'Open menu'}
				onClick={() => setOpen((o) => !o)}
			>
				<span className="font-mono text-lg leading-none">{open ? '×' : '≡'}</span>
			</button>

			<AnimatePresence>
				{open ? (
					<motion.div
						className="fixed inset-0 z-[60] flex flex-col bg-[#050508]/98 px-6 pb-10 pt-24 backdrop-blur-xl"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<nav className="flex flex-col gap-2" aria-label="Mobile primary">
							{links.map(({ href, label, path }) => (
								<a
									key={href}
									href={href}
									className={`rounded-2xl px-4 py-3 text-lg font-medium ${
										isRouteActive(within, path)
											? 'bg-white/10 text-white'
											: 'text-zinc-400 hover:bg-white/5 hover:text-white'
									}`}
									onClick={() => setOpen(false)}
								>
									{label}
								</a>
							))}
						</nav>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
}
