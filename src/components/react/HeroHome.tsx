import { motion } from 'framer-motion';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.07, delayChildren: 0.04 },
	},
};

const item = {
	hidden: { opacity: 0, y: 22 },
	show: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 140, damping: 22 },
	},
};

type Props = {
	name: string;
	shortTitle: string;
	location: string;
	avatar: string;
	taglines: readonly string[];
	githubBio: string;
	publicRepos: number;
	sinceYear: number;
	links: { github: string; linkedin: string; meefi: string };
};

export default function HeroHome({
	name,
	shortTitle,
	location,
	avatar,
	taglines,
	githubBio,
	publicRepos,
	sinceYear,
	links,
}: Props) {
	return (
		<motion.section
			className="relative mx-auto max-w-6xl px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16"
			initial="hidden"
			animate="show"
			variants={container}
		>
			<div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
				<motion.div variants={item} className="relative mx-auto shrink-0 lg:mx-0">
					<div className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-cyan-400/35 via-fuchsia-500/20 to-transparent opacity-80 blur-md" />
					<img
						src={avatar}
						alt=""
						width={176}
						height={176}
						className="relative h-40 w-40 rounded-2xl border border-white/10 object-cover shadow-2xl shadow-cyan-900/30 md:h-44 md:w-44"
						loading="eager"
						decoding="async"
					/>
				</motion.div>

				<div className="min-w-0 flex-1 space-y-8 text-center lg:text-left">
					<div className="space-y-4">
						<motion.p
							variants={item}
							className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400/90"
						>
							{location}
						</motion.p>
						<motion.h1
							variants={item}
							className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
						>
							{name}
						</motion.h1>
						<motion.p
							variants={item}
							className="mx-auto max-w-2xl text-lg text-zinc-400 md:text-xl lg:mx-0"
						>
							{shortTitle}
						</motion.p>
					</div>

					<motion.div
						variants={item}
						className="mx-auto flex max-w-2xl flex-col gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 text-left lg:mx-0"
					>
						{taglines.map((line) => (
							<p
								key={line}
								className="text-sm leading-relaxed text-zinc-300 md:text-base"
							>
								{line}
							</p>
						))}
						<p className="border-t border-white/10 pt-3 font-mono text-xs leading-relaxed text-zinc-500">
							GitHub bio: “{githubBio}”
						</p>
					</motion.div>

					<motion.div
						variants={item}
						className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
					>
						<a
							href={links.meefi}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110"
						>
							Visit Meefi
						</a>
						<a
							href={links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.08]"
						>
							GitHub
						</a>
						<a
							href={links.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.08]"
						>
							LinkedIn
						</a>
					</motion.div>

					<motion.dl
						variants={item}
						className="grid grid-cols-2 gap-4 rounded-2xl border border-white/[0.06] bg-black/20 p-4 sm:grid-cols-4"
					>
						<div className="text-center sm:text-left">
							<dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
								Public repos
							</dt>
							<dd className="font-display text-2xl font-bold text-white">
								{publicRepos}+
							</dd>
						</div>
						<div className="text-center sm:text-left">
							<dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
								On GitHub since
							</dt>
							<dd className="font-display text-2xl font-bold text-white">
								{sinceYear}
							</dd>
						</div>
						<div className="col-span-2 text-center sm:col-span-2 sm:text-left">
							<dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
								Primary stack
							</dt>
							<dd className="text-sm font-medium text-zinc-300">
								Rails · React · PostgreSQL · Docker · Laravel · Data notebooks
							</dd>
						</div>
					</motion.dl>
				</div>
			</div>
		</motion.section>
	);
}
